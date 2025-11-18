import React from 'react';
import { MapPin } from 'lucide-react';

export const Map = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-foreground">
          Localização do Ginásio
        </h3>
      </div>
      <p className="text-muted-foreground mb-4">
        Iron Studio - Perto do Shopping Leiria
      </p>
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-border shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.8906766842507!2d-8.809600000000001!3d39.7436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzM3LjAiTiA4wrA0OCcyNi42Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Iron Studio - Perto do Shopping Leiria"
        />
      </div>
    </div>
  );
};
