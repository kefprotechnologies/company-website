"use client";

export default function BorderBeam() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden">
      {/* Top Left Bracket - White */}
      <div
        className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20"
        style={{ 
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.6))",
          borderRadius: "8px 0 0 0" 
        }}
      />
      
      {/* Top Right Bracket - Blue */}
      <div
        className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#00a3e0] opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20"
        style={{ 
          filter: "drop-shadow(0 0 3px rgba(0,163,224,0.6))",
          borderRadius: "0 8px 0 0" 
        }}
      />

      {/* Bottom Left Bracket - Blue */}
      <div
        className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-[#00a3e0] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20"
        style={{ 
          filter: "drop-shadow(0 0 3px rgba(0,163,224,0.6))",
          borderRadius: "0 0 0 8px" 
        }}
      />

      {/* Bottom Right Bracket - White */}
      <div
        className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-20"
        style={{ 
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.6))",
          borderRadius: "0 0 8px 0" 
        }}
      />
    </div>
  );
}



