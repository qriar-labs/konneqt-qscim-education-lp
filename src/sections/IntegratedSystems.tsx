
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const IntegratedSystems = () => {
  const { t } = useLanguage();

  const systemCategories = [
    {
      title: t('integratedSystems.sis'),
      systems: ['Banner', 'PeopleSoft', 'Ellucian', 'Solução de Campus'],
      color: 'konneqt-blue'
    },
    {
      title: t('integratedSystems.lms'),
      systems: ['Moodle', 'Canvas', 'Blackboard', 'Google Classroom'],
      color: 'konneqt-purple'
    },
    {
      title: t('integratedSystems.directories'),
      systems: ['Azure AD', 'Google Workspace', 'Active Directory', 'Okta'],
      color: 'konneqt-green'
    },
    {
      title: t('integratedSystems.others'),
      systems: [
        t('integratedSystems.others.wifi'), 
        t('integratedSystems.others.labs'), 
        t('integratedSystems.others.access'), 
        t('integratedSystems.others.printing')
      ],
      color: 'konneqt-orange'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full animate-pulse delay-2000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 rounded-full animate-pulse delay-500" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 rounded-full animate-pulse delay-700" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 rounded-full animate-pulse delay-1200" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full animate-pulse delay-800" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-16 left-2/3 w-1 h-1 rounded-full animate-pulse delay-400" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-52 left-1/6 w-1 h-1 rounded-full animate-pulse delay-900" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-16 left-3/4 w-1 h-1 rounded-full animate-pulse delay-600" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-48 right-1/6 w-1 h-1 rounded-full animate-pulse delay-1100" style={{ backgroundColor: '#637ef2' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white font-inter">
              <span className="font-light">{t('integratedSystems.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('integratedSystems.title.integrated')}</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-inter">
              {t('integratedSystems.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="border-[#2f2f2f] bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white font-inter">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.systems.map((system, systemIndex) => (
                    <Badge 
                      key={systemIndex} 
                      variant="secondary" 
                      className="w-full justify-center py-2 text-xs hover:bg-konneqt-blue/10 transition-colors"
                    >
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-16 bg-transparent rounded-2xl p-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-transparent rounded-full px-8 py-4">
              <span className="text-lg font-semibold text-white font-inter">{t('integratedSystems.realtime')}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntegratedSystems;
