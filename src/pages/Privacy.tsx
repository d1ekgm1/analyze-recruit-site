import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 헤더 */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                개인정보처리방침
              </h1>
              <p className="text-xl text-muted-foreground">
                데이터 분석 스터디 개인정보 처리 방침 (요약 버전)
              </p>
            </div>

            {/* 중요 고지 */}
            <Alert className="mb-8">
              <Shield className="h-4 w-4" />
              <AlertDescription className="text-base">
                <strong>본 사이트는 학습용 실습 사이트입니다.</strong> 
                실제 개인정보 수집은 이루어지지 않으며, 모든 내용은 교육 목적으로 작성되었습니다.
              </AlertDescription>
            </Alert>

            <div className="space-y-8">
              {/* 수집 목적 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">1. 개인정보 수집 및 이용 목적</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">스터디 운영 및 관리</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>스터디 참가자 선발 및 관리</li>
                      <li>교육 과정 진행 및 피드백 제공</li>
                      <li>출석 관리 및 진도 확인</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">소통 및 안내</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>스터디 일정 및 공지사항 전달</li>
                      <li>개별 상담 및 피드백 제공</li>
                      <li>수료증 발급 및 사후 관리</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 수집 항목 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">2. 수집하는 개인정보 항목</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-primary">필수 항목</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>이름</li>
                        <li>이메일 주소</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-primary">선택 항목</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>관심 분야</li>
                        <li>학습 목표</li>
                        <li>연락처 (필요시)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 보관 기간 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">3. 개인정보 보관 기간</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">스터디 참가자</h4>
                      <p className="text-muted-foreground">
                        스터디 종료 후 <strong>1년간</strong> 보관<br />
                        (사후 관리 및 추가 프로그램 안내 목적)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">미참가 신청자</h4>
                      <p className="text-muted-foreground">
                        신청일로부터 <strong>6개월간</strong> 보관<br />
                        (차기 프로그램 안내 목적)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 제3자 제공 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">4. 개인정보 제3자 제공</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent p-6 rounded-lg">
                    <p className="text-center text-lg font-medium text-foreground">
                      <strong>개인정보를 제3자에게 제공하지 않습니다.</strong>
                    </p>
                    <p className="text-center text-muted-foreground mt-2">
                      법령에 의한 요구가 있는 경우를 제외하고는 어떠한 경우에도 개인정보를 외부에 제공하지 않습니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 권리 및 행사 방법 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">5. 개인정보 권리 및 행사 방법</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    정보주체는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>개인정보 열람 요구</li>
                      <li>오류 등이 있을 경우 정정·삭제 요구</li>
                    </ul>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>처리정지 요구</li>
                      <li>동의 철회 요구</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 연락처 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">6. 개인정보보호 책임자 및 문의</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">개인정보보호 책임자</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p><strong>이름:</strong> 김데이터</p>
                        <p><strong>직책:</strong> 스터디 운영 책임자</p>
                        <p><strong>연락처:</strong> <a href="mailto:privacy@datastudy.com" className="text-primary hover:underline">privacy@datastudy.com</a></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 시행일 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">7. 개인정보처리방침 시행일</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    본 개인정보처리방침은 <strong>2024년 1월 1일</strong>부터 시행됩니다.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    개인정보처리방침의 내용이 변경되는 경우 웹사이트 공지사항을 통해 공지하겠습니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 하단 고지 */}
            <Alert className="mt-12">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                본 개인정보처리방침에 대한 문의사항이 있으시면 언제든지 
                <a href="mailto:privacy@datastudy.com" className="text-primary hover:underline ml-1">
                  privacy@datastudy.com
                </a>으로 연락주시기 바랍니다.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;