import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <Link 
              to={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
