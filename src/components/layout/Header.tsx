import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          데이터 분석 스터디
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/curriculum" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive('/curriculum') ? 'text-primary font-medium' : ''
            }`}
          >
            소개
          </Link>
          <Link 
            to="/apply" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive('/apply') ? 'text-primary font-medium' : ''
            }`}
          >
            신청
          </Link>
          <Link 
            to="/privacy" 
            className={`text-foreground hover:text-primary transition-colors ${
              isActive('/privacy') ? 'text-primary font-medium' : ''
            }`}
          >
            개인정보
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link to="/curriculum">상세 보기</Link>
          </Button>
          <Button asChild>
            <Link to="/apply">신청하기</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            메뉴
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;