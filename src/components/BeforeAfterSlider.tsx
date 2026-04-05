'use client';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, label }: BeforeAfterSliderProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      {label && (
        <div className="bg-blue-600 text-white text-center text-sm font-semibold py-2 px-4">
          {label}
        </div>
      )}
      <div className="flex">
        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 z-10 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            BEFORE
          </div>
          <img
            src={beforeSrc}
            alt={label ? `${label} before hair transplant` : 'Before hair transplant'}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-0.5 bg-white z-10 relative" />
        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            AFTER
          </div>
          <img
            src={afterSrc}
            alt={label ? `${label} after hair transplant` : 'After hair transplant'}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
