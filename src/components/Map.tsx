import React from 'react';
import { MapPin } from 'lucide-react';

export const Map = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-foreground">
          Localização do Centro de Treinos
        </h3>
      </div>
      <p className="text-muted-foreground mb-4">
        Iron Studio - Perto do Shopping Leiria
      </p>
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-border shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.77008545989!2d-8.826585259049883!3d39.73243148196252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd227300160777f9%3A0x1308ecd8f89bae14!2sIronstudio!5e0!3m2!1spt-PT!2spt!4v1765843476415!5m2!1spt-PT!2spt"
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
