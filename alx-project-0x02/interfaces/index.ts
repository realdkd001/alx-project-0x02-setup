import Card from "@/components/common/Card";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
}