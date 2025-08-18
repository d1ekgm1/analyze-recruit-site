import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Calendar, Share2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const ThankYou = () => {
  const { toast } = useToast();

  const handleShare = () => {
    const shareData = {
      title: "데이터 분석 스터디 모집",
      text: "실전 과제로 성장하는 데이터 분석 스터디에 참여해보세요!",
      url: window.location.origin
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // 폴백: 클립보드에 복사
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      toast({
        title: "링크가 복사되었습니다!",
        description: "친구들과 공유해보세요."
      });
    }
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 성공 아이콘 */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* 메인 메시지 */}
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              신청이 완료되었습니다!
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              데이터 분석 스터디에 관심을 가져주셔서 감사합니다.
            </p>

            {/* 진행 상황 카드 */}
            <Card className="mb-12 text-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  다음 단계 안내
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-4 mt-1">1</Badge>
                    <div>
                      <h3 className="font-medium mb-1">확인 메일 발송</h3>
                      <p className="text-muted-foreground">24시간 내에 신청 확인 메일을 보내드립니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-4 mt-1">2</Badge>
                    <div>
                      <h3 className="font-medium mb-1">개별 상담</h3>
                      <p className="text-muted-foreground">3일 내에 개별 상담을 위한 연락을 드립니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-4 mt-1">3</Badge>
                    <div>
                      <h3 className="font-medium mb-1">스터디 시작</h3>
                      <p className="text-muted-foreground">다음 주 월요일에 스터디가 시작됩니다.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 연락처 안내 */}
            <Card className="mb-12 bg-accent">
              <CardContent className="p-8 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">문의사항이 있으시다면?</h3>
                <p className="text-muted-foreground mb-4">
                  언제든지 연락주세요. 빠르게 답변드리겠습니다.
                </p>
                <a 
                  href="mailto:contact@datastudy.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@datastudy.com
                </a>
              </CardContent>
            </Card>

            {/* 2차 행동 버튼들 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">뉴스레터 구독</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    최신 데이터 분석 트렌드를 받아보세요
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" id="cta_ty_newsletter">
                      구독하기
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Share2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">지인에게 공유</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    함께 성장할 동료를 초대해보세요
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleShare}
                    id="cta_ty_share"
                  >
                    공유하기
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">다른 프로그램</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    더 많은 학습 기회를 확인해보세요
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/curriculum" id="cta_ty_more">
                      둘러보기
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 마지막 메시지 */}
            <div className="mt-16 p-8 bg-primary text-primary-foreground rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                6주 후, 당신의 변화가 기대됩니다
              </h2>
              <p className="text-lg opacity-90">
                실전 데이터 분석 역량과 포트폴리오를 갖춘 전문가로 성장하세요!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;