export function FlagRU({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.67)} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: "inline-block" }}>
      <rect width="30" height="20" fill="#fff"/>
      <rect y="6.67" width="30" height="6.67" fill="#0039A6"/>
      <rect y="13.33" width="30" height="6.67" fill="#D52B1E"/>
    </svg>
  );
}

export function FlagTM({ size = 20 }: { size?: number }) {
  const h = Math.round(size * 0.67);
  return (
    <svg width={size} height={h} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: "inline-block" }}>
      <rect width="30" height="20" fill="#1DB954"/>
      <rect width="7" height="20" fill="#C8102E"/>
      <rect x="1" y="3" width="5" height="2" rx="0.5" fill="white" opacity="0.7"/>
      <rect x="1" y="7" width="5" height="2" rx="0.5" fill="white" opacity="0.7"/>
      <rect x="1" y="11" width="5" height="2" rx="0.5" fill="white" opacity="0.7"/>
      <rect x="1" y="15" width="5" height="2" rx="0.5" fill="white" opacity="0.7"/>
    </svg>
  );
}

export function IconBarbell({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="10" width="2.5" height="4" rx="0.5" fill="currentColor" opacity="0.6"/>
      <rect x="4.5" y="8.5" width="2" height="7" rx="0.5" fill="currentColor" opacity="0.8"/>
      <rect x="6.5" y="10.5" width="11" height="3" rx="1" fill="currentColor"/>
      <rect x="15.5" y="8.5" width="2" height="7" rx="0.5" fill="currentColor" opacity="0.8"/>
      <rect x="17.5" y="10" width="2" height="4" rx="0.5" fill="currentColor" opacity="0.6"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

export function IconYoga({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="3.5" r="1.8" fill="currentColor"/>
      <path d="M12 5.5 L9 10 L6 8.5 M12 5.5 L15 10 L18 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10 L9.5 15 L7 20 M15 10 L14.5 15 L17 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 15 L14.5 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBoxingGlove({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 13C5 9.5 6.5 7 9 6 L15 6 C17 6 19 7.5 19 10.5 L19 15 C19 17.2 17.2 19 15 19 L9 19 C6.8 19 5 17.2 5 15 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 6 C9 4.5 10 3.5 11.5 3.5 L13.5 3.5 C14.5 3.5 15 4.2 15 5 L15 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="5" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      <path d="M8 10 L16 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
      <path d="M8 12.5 L16 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function IconRunner({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="14" cy="3.5" r="1.8" fill="currentColor"/>
      <path d="M14 5.3 L11.5 9 L8 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 9 L10.5 13 L7.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 13 L14 14.5 L16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 5.3 L16.5 8.5 L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconDumbbell({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="1.5" y="9.5" width="3" height="5" rx="1" fill="currentColor" opacity="0.5"/>
      <rect x="4.5" y="7.5" width="2.5" height="9" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="7" y="10.5" width="10" height="3" rx="1.5" fill="currentColor"/>
      <rect x="17" y="7.5" width="2.5" height="9" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="19.5" y="9.5" width="3" height="5" rx="1" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

export function IconFlame({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C12 2 8 6 8 10C8 10 6 9 6 7C4 9.5 4 12 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 17 7 15 5C15 7 13.5 8.5 12 9C12 9 13 7 12 2Z" fill="currentColor" opacity="0.2"/>
      <path d="M12 2C12 2 8 6 8 10C8 10 6 9 6 7C4 9.5 4 12 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 17 7 15 5C15 7 13.5 8.5 12 9C12 9 13 7 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="16" r="2.5" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

export function IconHeartPulse({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 20.5C12 20.5 3 14.5 3 8.5C3 6 5 4 7.5 4C9.5 4 11 5 12 6.5C13 5 14.5 4 16.5 4C19 4 21 6 21 8.5C21 14.5 12 20.5 12 20.5Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 11 L9.5 8.5 L11 12 L13 9 L14.5 11 L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconZap({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13 2 L5 13 L11 13 L11 22 L19 11 L13 11 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWater({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3 C12 3 5 10 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 10 12 3 12 3Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 15.5C8.5 13.5 10 12 12 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

export function IconLeaf({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 20C6 20 4 11 10 7C14 4.5 20 4 20 4C20 4 20 10 17 14C14 18 8 18 6 20Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 20 L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconTarget({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <line x1="12" y1="2" x2="12" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="12" y1="19.5" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="2" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="19.5" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function IconSpa({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3C8 3 4 7 4 12C4 12 8 10 12 13C16 10 20 12 20 12C20 7 16 3 12 3Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M12 13 L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 21 L16 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function IconActivity({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconAward({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <path d="M8.5 14.5 L7 21 L12 18 L17 21 L15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
      <path d="M12 6 L12.9 8.5 L15.5 8.5 L13.5 10.2 L14.3 12.7 L12 11.2 L9.7 12.7 L10.5 10.2 L8.5 8.5 L11.1 8.5 Z" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

export function IconCheck({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <path d="M8 12 L11 15 L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWrench({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    </svg>
  );
}

export function IconGlobe({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3 C12 3 9 7 9 12 C9 17 12 21 12 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 3 C12 3 15 7 15 12 C15 17 12 21 12 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="4.5" y1="7.5" x2="19.5" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <line x1="4.5" y1="16.5" x2="19.5" y2="16.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function IconGalleryGym({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <IconBarbell size={size} className={className} />;
}
export function IconGalleryCardio({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <IconActivity size={size} className={className} />;
}
export function IconGallerySpa({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <IconSpa size={size} className={className} />;
}
export function IconGalleryYoga({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <IconYoga size={size} className={className} />;
}
export function IconGalleryBoxing({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <IconBoxingGlove size={size} className={className} />;
}
export function IconGalleryLocker({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      <circle cx="8.5" cy="12" r="1.2" fill="currentColor" opacity="0.7"/>
      <circle cx="15.5" cy="12" r="1.2" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}
export function IconGalleryBar({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 20 L8 12 L16 12 L18 20 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
      <rect x="5" y="9" width="14" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <path d="M9 12 C9 9 10 7 12 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 6.5 Q16 8 15 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

export function IconSparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M19 2 L19.8 5.2 L23 6 L19.8 6.8 L19 10 L18.2 6.8 L15 6 L18.2 5.2 Z" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}
