import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  companyName?: string;
}

const Header = ({ companyName = "Acme Manufacturing Ltd" }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* LEFT — Logo + Business Portal */}
          <div className="flex items-center gap-3">
            <img
              src="/stif-logo.png"
              alt="STIF"
              className="h-8 w-auto bg-white rounded px-2 py-1"
            />

            <span className="text-sm font-semibold tracking-tight">
              Business Portal
            </span>
          </div>

          {/* RIGHT — Welcome + Logout */}
          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-2 text-white/90">
              <User className="h-4 w-4" />
              <span>
                Welcome, <span className="font-semibold">{companyName}</span>
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white/90 hover:text-white hover:bg-white/10"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
