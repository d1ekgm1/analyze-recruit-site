import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Database, Target, Users, Star, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            신규 모집 중
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            데이터 분석 스터디 –<br />
            실전 과제로 성장하기
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            SQL·GA4·대시보드를 함께 실습하며 포트폴리오를 완성합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/apply" id="cta_hero_primary">
                바로 신청하기
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/curriculum" id="cta_hero_secondary">
                상세 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">최근 3기 누적 120+명 참여</span>
            <span className="text-sm text-muted-foreground">(실습용 예시)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  "실제 데이터로 GA4 분석을 배울 수 있어서 정말 도움이 되었어요. 포트폴리오도 완성했습니다!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    김
                  </div>
                  <div>
                    <p className="font-medium">김○○님</p>
                    <p className="text-sm text-muted-foreground">마케터</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  "SQL 기초부터 대시보드 구축까지, 체계적으로 배울 수 있는 커리큘럼이었습니다."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    박
                  </div>
                  <div>
                    <p className="font-medium">박○○님</p>
                    <p className="text-sm text-muted-foreground">기획자</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  "멘토님의 피드백이 정말 꼼꼼하고 실무에 바로 적용할 수 있는 내용들이었어요."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    이
                  </div>
                  <div>
                    <p className="font-medium">이○○님</p>
                    <p className="text-sm text-muted-foreground">분석가</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              왜 우리 스터디인가요?
            </h2>
            <p className="text-xl text-muted-foreground">
              실무에 바로 적용할 수 있는 실전 중심 커리큘럼
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">실제 데이터셋</h3>
                <p className="text-muted-foreground">
                  실제 기업 데이터를 활용한 분석 실습으로 현실적인 경험을 제공합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">코드리뷰·피드백</h3>
                <p className="text-muted-foreground">
                  전문 멘토의 1:1 코드리뷰와 상세한 피드백으로 실력을 향상시킵니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">퍼널 분석 실습</h3>
                <p className="text-muted-foreground">
                  GA4를 활용한 실제 퍼널 분석 경험으로 마케팅 분석 역량을 기릅니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">포트폴리오 컨설팅</h3>
                <p className="text-muted-foreground">
                  완성된 프로젝트를 포트폴리오로 정리하는 컨설팅까지 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  데이터 분석 경험이 없어도 참여할 수 있나요?
                </AccordionTrigger>
                <AccordionContent>
                  네, 기초부터 차근차근 진행하므로 경험이 없어도 괜찮습니다. 다만 Excel 사용법 정도는 알고 계시면 좋습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  스터디 기간과 시간 투자는 어느 정도인가요?
                </AccordionTrigger>
                <AccordionContent>
                  총 6주 과정이며, 주당 5-7시간 정도 투자하시면 됩니다. 주 1회 온라인 세션과 개별 실습 시간을 포함합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  사용하는 도구나 프로그램이 궁금합니다.
                </AccordionTrigger>
                <AccordionContent>
                  SQL(BigQuery), GA4, Tableau/Power BI, Python(pandas) 등을 사용합니다. 모든 도구는 무료 버전으로 진행 가능합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/curriculum#faq" id="cta_mini_faq_more">
                  더 많은 질문 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            지금 신청하고 실전 분석 시작하기
          </h2>
          <p className="text-xl mb-10 opacity-90">
            6주 후, 당신의 데이터 분석 역량이 달라집니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/apply" id="cta_footer_apply">
                신청하기
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/curriculum" id="cta_footer_detail">
                상세 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;