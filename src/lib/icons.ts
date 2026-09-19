import {
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Users,
  Video,
  Eye,
  Calendar,
  Award,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
  users: Users,
  video: Video,
  eye: Eye,
  calendar: Calendar,
  award: Award,
  handshake: Handshake,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Users;
}
