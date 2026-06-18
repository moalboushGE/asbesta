// Darstellungs-Helfer fürs Admin-Dashboard (Status-Meta, Datum, Telefon-Links).
import type { Status } from './leads';

export interface StatusMeta {
  readonly label: string;
  /** Tailwind-Klassen für Badge (Ring+BG+Text) – A11y: nie Farbe allein, immer mit Icon+Text. */
  readonly klasse: string;
  readonly icon: string;
}

export const STATUS_META: Record<Status, StatusMeta> = {
  neu: { label: 'Neu', klasse: 'bg-red-50 text-red-700 ring-red-100', icon: 'lucide:sparkles' },
  gesehen: { label: 'Gesehen', klasse: 'bg-gray-100 text-gray-700 ring-gray-200', icon: 'lucide:eye' },
  in_bearbeitung: {
    label: 'In Bearbeitung',
    klasse: 'bg-signal-100 text-signal-700 ring-signal-400',
    icon: 'lucide:loader',
  },
  angebot_raus: { label: 'Angebot raus', klasse: 'bg-info/10 text-info ring-info/30', icon: 'lucide:file-text' },
  gewonnen: { label: 'Gewonnen', klasse: 'bg-success/10 text-success ring-success/30', icon: 'lucide:circle-check' },
  verloren: { label: 'Verloren', klasse: 'bg-gray-100 text-gray-500 ring-gray-200', icon: 'lucide:circle-x' },
  kein_interesse: {
    label: 'Kein Interesse',
    klasse: 'bg-gray-100 text-gray-500 ring-gray-200',
    icon: 'lucide:circle-minus',
  },
  spam: { label: 'Spam', klasse: 'bg-gray-100 text-gray-400 ring-gray-200', icon: 'lucide:ban' },
};

/** Status in sinnvoller Workflow-Reihenfolge für Auswahl-Menüs. */
export function statusMeta(status: string): StatusMeta {
  return STATUS_META[status as Status] ?? STATUS_META.neu;
}

export function formatDatum(iso: string): string {
  return new Date(iso).toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function relativeKurz(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const tage = Math.floor(diff / (24 * 60 * 60 * 1000));
  if (tage <= 0) return 'heute';
  if (tage === 1) return 'gestern';
  if (tage < 7) return `vor ${tage} Tagen`;
  if (tage < 30) return `vor ${Math.floor(tage / 7)} Wochen`;
  return `vor ${Math.floor(tage / 30)} Monaten`;
}

/** tel:-Link aus einer (auch unsauberen) Telefonnummer. */
export function telHref(tel: string | null): string {
  if (!tel) return '';
  const clean = tel.replace(/[^\d+]/g, '');
  return clean ? `tel:${clean}` : '';
}

/** wa.me-Link – führende 0 → 49 (DE). */
export function waHref(tel: string | null): string {
  if (!tel) return '';
  let d = tel.replace(/[^\d]/g, '');
  if (d.startsWith('0')) d = `49${d.slice(1)}`;
  return d ? `https://wa.me/${d}` : '';
}
