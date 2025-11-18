import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeMap = (mapboxToken: string) => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-8.8074, 39.7436], // Shopping Leiria coordinates
        zoom: 15,
      });

      // Add marker for Shopping Leiria
      new mapboxgl.Marker({ color: '#3B82F6' })
        .setLngLat([-8.8074, 39.7436])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            '<div class="p-2"><h3 class="font-bold">Shopping Leiria</h3><p class="text-sm">Centro Comercial</p></div>'
          )
        )
        .addTo(map.current);

      // Add marker for Iron Studio (nearby)
      new mapboxgl.Marker({ color: '#DC2626' })
        .setLngLat([-8.8065, 39.7430])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            '<div class="p-2"><h3 class="font-bold">Iron Studio</h3><p class="text-sm">Ginásio - Perto do Shopping</p></div>'
          )
        )
        .addTo(map.current);

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      setIsInitialized(true);
    } catch (error) {
      console.error('Erro ao inicializar mapa:', error);
    }
  };

  const handleInitialize = () => {
    if (token.trim()) {
      initializeMap(token);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {!isInitialized ? (
        <div className="bg-white border-2 border-[hsl(var(--border-light))] rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-[hsl(var(--foreground-light))]">
              Localização do Ginásio
            </h3>
          </div>
          <p className="text-[hsl(var(--muted-foreground-light))] mb-4">
            Para visualizar o mapa, insira um token do Mapbox:
          </p>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Insira o token do Mapbox"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleInitialize} disabled={!token.trim()}>
              Mostrar Mapa
            </Button>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground-light))] mt-3">
            Obtenha o seu token gratuito em{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      ) : (
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-[hsl(var(--border-light))] shadow-[var(--shadow-elevated)]">
          <div ref={mapContainer} className="absolute inset-0" />
        </div>
      )}
    </div>
  );
};
