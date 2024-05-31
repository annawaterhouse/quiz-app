import { Button } from "@/components/ui/button";

export default function ButtonDefault({ children, onClick }) {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}