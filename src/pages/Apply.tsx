import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Clock, Users, AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
    goal: "",
    privacyConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    { id: "ga", label: "GA4 분석" },
    { id: "sql", label: "SQL 실습" },
    { id: "ml", label: "머신러닝" },
    { id: "dashboard", label: "대시보드 구축" }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }
    
    if (formData.goal.length > 100) {
      newErrors.goal = "목표는 100자 이내로 입력해주세요.";
    }
    
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "개인정보 수집·이용에 동의해주세요.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "입력 정보를 확인해주세요",
        description: "필수 항목을 모두 입력하고 약관에 동의해주세요.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 실제 제출 로직은 여기에 구현
      await new Promise(resolve => setTimeout(resolve, 1000)); // 시뮬레이션
      
      toast({
        title: "신청이 완료되었습니다!",
        description: "곧 연락드리겠습니다."
      });
      
      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "신청 중 오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              스터디 신청
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              6주 만에 데이터 분석 전문가로 성장해보세요
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>소요시간: 3분</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>온라인 진행</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5" />
                <span>개인정보 보호</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">신청서 작성</CardTitle>
                <p className="text-center text-muted-foreground">
                  간단한 정보만 입력하시면 됩니다
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} id="form_apply" className="space-y-6">
                  {/* 이름 */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      이름 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* 이메일 */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      이메일 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* 관심 주제 */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">
                      관심 주제 (선택)
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <div key={interest.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest.id}
                            checked={formData.interests.includes(interest.id)}
                            onCheckedChange={(checked) => 
                              handleInterestChange(interest.id, checked as boolean)
                            }
                          />
                          <Label 
                            htmlFor={interest.id}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {interest.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 한 줄 목표 */}
                  <div className="space-y-2">
                    <Label htmlFor="goal" className="text-base font-medium">
                      한 줄 목표 (선택)
                    </Label>
                    <Textarea
                      id="goal"
                      placeholder="이 스터디를 통해 달성하고 싶은 목표를 간단히 적어주세요"
                      value={formData.goal}
                      onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                      className={`resize-none ${errors.goal ? "border-destructive" : ""}`}
                      rows={3}
                      maxLength={100}
                    />
                    <div className="flex justify-between items-center">
                      {errors.goal && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.goal}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground ml-auto">
                        {formData.goal.length}/100자
                      </p>
                    </div>
                  </div>

                  {/* 개인정보 동의 */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))
                        }
                        className={errors.privacyConsent ? "border-destructive" : ""}
                      />
                      <div className="space-y-1">
                        <Label 
                          htmlFor="privacy"
                          className="text-sm font-normal cursor-pointer leading-relaxed"
                        >
                          개인정보 수집·이용에 동의합니다 <span className="text-destructive">*</span>
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          <a 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            개인정보처리방침 보기
                          </a>
                        </p>
                      </div>
                    </div>
                    {errors.privacyConsent && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.privacyConsent}
                      </p>
                    )}
                  </div>

                  {/* 제출 버튼 */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6"
                    disabled={isSubmitting}
                    id="btn_submit_apply"
                  >
                    {isSubmitting ? "신청 중..." : "신청 완료하기"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 추가 안내 */}
            <Alert className="mt-8">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                신청 후 24시간 내에 확인 메일을 보내드립니다. 
                스팸함도 확인해주세요!
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;