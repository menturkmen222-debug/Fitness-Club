import { useEffect, useState } from "react";

export interface FitnessClub {
  name: string;
  tag: string;
  city: string;
  phone: string;
  addr: string;
  color: string;
  ig: string;
  tg: string;
  est: string;
  members: string;
  trainers: string;
}

function hexToRgb(hex: string): string {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  if (!result) return "239, 68, 68"; // Default to red if invalid

  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

export function useFitnessClub(): FitnessClub {
  const [club, setClub] = useState<FitnessClub>({
    name: "FitPro",
    tag: "Güýçli. Sagdyn. Erkin.",
    city: "Aşgabat",
    phone: "+993 12 34-56-78",
    addr: "Garaşsyzlyk şaýoly 100",
    color: "EF4444",
    ig: "fitpro_club",
    tg: "fitpro_tm",
    est: "2019",
    members: "1200",
    trainers: "25"
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const parsedClub = {
      name: params.get("name") || "FitPro",
      tag: params.get("tag") || "Güýçli. Sagdyn. Erkin.",
      city: params.get("city") || "Aşgabat",
      phone: params.get("phone") || "+993 12 34-56-78",
      addr: params.get("addr") || "Garaşsyzlyk şaýoly 100",
      color: params.get("color") || "EF4444",
      ig: params.get("ig") || "fitpro_club",
      tg: params.get("tg") || "fitpro_tm",
      est: params.get("est") || "2019",
      members: (params.get("members") || "1200").replace(/\D/g, ''), // Strip non-digits for counter
      trainers: (params.get("trainers") || "25").replace(/\D/g, '')
    };

    setClub(parsedClub);

    // Inject CSS variables
    const root = document.documentElement;
    root.style.setProperty("--club-accent", `#${parsedClub.color}`);
    root.style.setProperty("--club-accent-rgb", hexToRgb(parsedClub.color));
    
  }, []);

  return club;
}
