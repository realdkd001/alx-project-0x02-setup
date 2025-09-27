import Card from "@/components/common/Card";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
export interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}