import { WhatsAppIcon } from "./SocialIcons";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/351910000000', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Contactar via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" color="white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fala connosco!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};
