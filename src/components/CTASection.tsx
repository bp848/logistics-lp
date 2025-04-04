import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { Button } from '@/components/ui/button';
import { Clock, FileText, PhoneCall, Calculator, Upload } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bunshodo-blue/10 to-bunshodo-green/10 z-0"></div>
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bunshodo-blue/10 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <GlassPanelEffect
          className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center rounded-3xl"
          intensity="medium"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal">
            印刷・物流のお悩み、今すぐ解決します
          </h2>
          <p className="text-xl text-bunshodo-medium-gray mb-10 max-w-3xl mx-auto reveal">
            文唱堂の印刷物流サービスで、コスト削減、業務効率化、環境貢献を実現しませんか？
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <PhoneCall className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">無料相談</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  お気軽にご相談ください。課題解決のプランをご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100">
                  <p className="text-sm text-bunshodo-medium-gray">
                    お客様の課題に合わせた最適なソリューションをご提案いたします。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <Calculator className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">印刷物流コスト診断</h3>
                <div className="flex items-center text-bunshodo-blue text-sm font-medium mb-4">
                  <span>現在のコスト情報をご入力ください</span>
                </div>
                <p className="text-bunshodo-medium-gray mb-4">
                  現在の印刷・物流コストを分析し、削減可能な金額をご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100">
                  <p className="text-sm text-bunshodo-medium-gray">
                    コスト情報をテキストでご入力いただくだけで、約30%のコスト削減可能性を診断します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '300ms' }}>
            <Button 
              size="lg" 
              className="bg-bunshodo-blue hover:bg-bunshodo-dark-blue text-white shadow-lg"
              onClick={() => window.open('https://form.typeform.com/to/xAJyZjnr', '_blank')}
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              無料相談はこちら
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-bunshodo-blue text-bunshodo-blue hover:bg-bunshodo-blue/10 shadow-sm"
              onClick={() => window.open('https://form.typeform.com/to/SmxiiFs5', '_blank')}
            >
              <Calculator className="h-5 w-5 mr-2" />
              印刷物流コスト診断
            </Button>
          </div>
        </GlassPanelEffect>
      </div>
    </section>
  );
};

export default CTASection;
