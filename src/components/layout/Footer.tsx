import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              데이터 분석 스터디
            </h3>
            <p className="text-muted-foreground">
              실전 과제로 성장하는 데이터 분석 스터디입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">메뉴</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/curriculum" className="text-muted-foreground hover:text-primary transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-muted-foreground hover:text-primary transition-colors">
                  신청
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">연락처</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contact@datastudy.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@datastudy.com
              </a>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 데이터 분석 스터디. 모든 권리 보유.</p>
          <p className="text-sm mt-2">본 사이트는 학습용 실습 사이트입니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;