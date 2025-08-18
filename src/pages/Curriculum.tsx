import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, Trophy, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Curriculum = () => {
  return (
    <Layout>
      {/* Sticky CTA */}
      <div className="fixed top-24 right-4 z-40 hidden lg:block">
        <Button asChild className="shadow-lg">
          <Link to="/apply" id="cta_sticky_apply">
            지금 신청
          </Link>
        </Button>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              데이터 분석 스터디 상세 소개
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              체계적인 커리큘럼으로 실무 역량을 기르는 6주 완성 프로그램
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">기간</h3>
                  <p className="text-muted-foreground">6주</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">시간투자</h3>
                  <p className="text-muted-foreground">주 5-7시간</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">진행방식</h3>
                  <p className="text-muted-foreground">온라인 + 실습</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">난이도</h3>
                  <p className="text-muted-foreground">초급-중급</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              커리큘럼
            </h2>
            <p className="text-xl text-muted-foreground">
              주차별 학습 목표와 산출물
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  week: "1주차",
                  title: "데이터 분석 기초 & SQL 입문",
                  goal: "데이터 분석의 기본 개념 이해 및 SQL 기초 문법 학습",
                  output: "간단한 SQL 쿼리 작성 및 데이터 추출 실습"
                },
                {
                  week: "2주차", 
                  title: "SQL 심화 & 데이터 전처리",
                  goal: "복잡한 SQL 쿼리 작성 및 데이터 정제 기법 학습",
                  output: "실제 데이터셋을 활용한 전처리 프로젝트"
                },
                {
                  week: "3주차",
                  title: "GA4 기초 & 웹 분석 개념",
                  goal: "GA4 설정 및 기본 리포트 이해, 웹 분석 지표 학습",
                  output: "GA4 계정 설정 및 기본 분석 리포트 작성"
                },
                {
                  week: "4주차",
                  title: "GA4 심화 & 퍼널 분석",
                  goal: "고급 GA4 기능 활용 및 사용자 여정 분석",
                  output: "전환 퍼널 분석 및 개선 제안서"
                },
                {
                  week: "5주차",
                  title: "대시보드 구축 & 시각화",
                  goal: "Tableau/Power BI를 활용한 인터랙티브 대시보드 제작",
                  output: "실시간 데이터 대시보드 구축"
                },
                {
                  week: "6주차",
                  title: "프로젝트 완성 & 포트폴리오",
                  goal: "종합 프로젝트 완성 및 포트폴리오 정리",
                  output: "완성된 분석 프로젝트 및 포트폴리오"
                }
              ].map((curriculum, index) => (
                <div key={index} className="relative flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    {index < 5 && <div className="w-px h-16 bg-border mt-4"></div>}
                  </div>
                  <Card className="flex-1 mb-4">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{curriculum.week}</Badge>
                      </div>
                      <CardTitle className="text-xl">{curriculum.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-foreground mb-1">학습 목표</h4>
                          <p className="text-muted-foreground">{curriculum.goal}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                            산출물
                          </h4>
                          <p className="text-muted-foreground">{curriculum.output}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              멘토 소개
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  김
                </div>
                <h3 className="text-xl font-semibold mb-2">김데이터 멘토</h3>
                <p className="text-muted-foreground mb-4">
                  現 네이버 데이터 분석가, 5년+ 경력, GA4 & SQL 전문가
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">GA4</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">BigQuery</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  박
                </div>
                <h3 className="text-xl font-semibold mb-2">박시각화 멘토</h3>
                <p className="text-muted-foreground mb-4">
                  現 카카오 BI 엔지니어, 대시보드 구축 및 시각화 전문가
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>데이터 분석 경험이 없어도 참여할 수 있나요?</AccordionTrigger>
                <AccordionContent>
                  네, 기초부터 차근차근 진행하므로 경험이 없어도 괜찮습니다. 다만 Excel 사용법 정도는 알고 계시면 좋습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>스터디 기간과 시간 투자는 어느 정도인가요?</AccordionTrigger>
                <AccordionContent>
                  총 6주 과정이며, 주당 5-7시간 정도 투자하시면 됩니다. 주 1회 온라인 세션(2시간)과 개별 실습 시간(3-5시간)을 포함합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>사용하는 도구나 프로그램이 궁금합니다.</AccordionTrigger>
                <AccordionContent>
                  SQL(BigQuery), GA4, Tableau/Power BI, Python(pandas) 등을 사용합니다. 모든 도구는 무료 버전으로 진행 가능하며, 설치 가이드를 제공합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>온라인으로만 진행되나요?</AccordionTrigger>
                <AccordionContent>
                  네, 모든 세션은 온라인으로 진행됩니다. Zoom을 통한 실시간 강의와 Slack을 통한 질의응답 및 피드백을 제공합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>참여비와 환불 정책이 궁금합니다.</AccordionTrigger>
                <AccordionContent>
                  참여비는 49만원이며, 시작 전까지 100% 환불, 1주차 완료 후에는 50% 환불 가능합니다. 부득이한 사정으로 참여가 어려운 경우 다음 기수로 이월 가능합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>수료 후 지원 서비스가 있나요?</AccordionTrigger>
                <AccordionContent>
                  수료 후 3개월간 멘토링 채널 접근 권한을 제공하며, 포트폴리오 피드백과 취업 관련 상담을 지원합니다. 또한 동기들과의 네트워킹 모임도 정기적으로 개최됩니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>실제로 어떤 데이터를 사용하나요?</AccordionTrigger>
                <AccordionContent>
                  익명화된 실제 이커머스 데이터, 모바일 앱 사용자 데이터, 웹사이트 방문자 데이터 등을 사용합니다. 모든 데이터는 개인정보가 제거된 상태로 제공되며, 실무와 동일한 환경에서 분석 경험을 쌓을 수 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>코딩 경험이 전혀 없는데 괜찮을까요?</AccordionTrigger>
                <AccordionContent>
                  괜찮습니다. SQL과 Python 기초부터 시작하며, 복사-붙여넣기 수준부터 차근차근 진행합니다. 중요한 것은 데이터에 대한 호기심과 학습 의지입니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            더 자세한 내용이 궁금하시다면?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/apply">
              지금 신청하기
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;