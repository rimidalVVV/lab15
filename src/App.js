import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ComposedChart, Area, AreaChart, RadialBarChart, RadialBar } from 'recharts';
import { TrendingUp, Users, Target, DollarSign, Award, Activity } from 'lucide-react';

const ChartDashboard = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Данные для сравнения физической активности
  const comparisonData = [
    {
      category: 'Ежедневная зарядка',
      'Военный вуз': 47.1,
      'Физ. факультет': 14.6,
      difference: 3.2
    },
    {
      category: 'Интенсивные тренировки',
      'Военный вуз': 70.6,
      'Физ. факультет': 29.2,
      difference: 2.4
    },
    {
      category: 'Спортивные достижения',
      'Военный вуз': 51.0,
      'Физ. факультет': 33.3,
      difference: 1.5
    },
    {
      category: 'Никогда не делают зарядку',
      'Военный вуз': 15.7,
      'Физ. факультет': 33.3,
      difference: 2.1
    }
  ];

  // Данные для военного вуза - виды спорта
  const militarySportsData = [
    { sport: 'Бокс и единоборства', percentage: 69.6, count: 71 },
    { sport: 'Футбол', percentage: 60.8, count: 62 },
    { sport: 'Волейбол', percentage: 54.9, count: 56 },
    { sport: 'Легкая атлетика', percentage: 49.0, count: 50 },
    { sport: 'Плавание', percentage: 43.1, count: 44 }
  ];

  // Данные для физического факультета - виды спорта
  const physFacSportsData = [
    { sport: 'Волейбол', percentage: 52.1, count: 25 },
    { sport: 'Водные виды', percentage: 39.6, count: 19 },
    { sport: 'Легкая атлетика', percentage: 37.5, count: 18 },
    { sport: 'Фигурное катание', percentage: 37.5, count: 18 },
    { sport: 'Баскетбол', percentage: 31.3, count: 15 }
  ];

  // Данные для утренней зарядки
  const morningExerciseData = [
    { category: 'Каждый день', military: 47.1, physfac: 14.6 },
    { category: 'По настроению', military: 37.3, physfac: 52.1 },
    { category: 'Никогда', military: 15.7, physfac: 33.3 }
  ];

  // Прогнозируемые результаты
  const forecastData = [
    {
      indicator: 'Ежедневная зарядка',
      current: 14.6,
      target: 75,
      improvement: 60.4
    },
    {
      indicator: 'Интенсивные тренировки',
      current: 29.2,
      target: 65,
      improvement: 35.8
    },
    {
      indicator: 'Спорт. достижения',
      current: 33.3,
      target: 55,
      improvement: 21.7
    },
    {
      indicator: 'Систем. пропуски',
      current: 25,
      target: 8,
      improvement: -17
    }
  ];

  // Бюджет проекта
  const budgetData = [
    { category: 'Спортивный инвентарь', amount: 150000, type: 'Единовременно', color: '#FF6B6B' },
    { category: 'Оборудование места', amount: 80000, type: 'Единовременно', color: '#4ECDC4' },
    { category: 'Информационные стенды', amount: 45000, type: 'Единовременно', color: '#45B7D1' },
    { category: 'Музыкальная аппаратура', amount: 25000, type: 'Единовременно', color: '#96CEB4' },
    { category: 'Методические материалы', amount: 20000, type: 'Единовременно', color: '#FFEAA7' }
  ];

  const monthlyBudgetData = [
    { category: 'Доп. оплата преподавателям', amount: 40000 },
    { category: 'Призы и поощрения', amount: 15000 },
    { category: 'Спортивное питание', amount: 10000 },
    { category: 'Организация соревнований', amount: 8000 },
    { category: 'Обслуживание оборудования', amount: 2000 }
  ];

  // Динамика внедрения
  const implementationData = [
    { month: 'Начало', 'Ежедневная зарядка': 14.6, 'Интенсивные тренировки': 29.2 },
    { month: '3 месяца', 'Ежедневная зарядка': 35, 'Интенсивные тренировки': 40 },
    { month: '6 месяцев', 'Ежедневная зарядка': 55, 'Интенсивные тренировки': 50 },
    { month: '9 месяцев', 'Ежедневная зарядка': 68, 'Интенсивные тренировки': 58 },
    { month: '12 месяцев', 'Ежедневная зарядка': 75, 'Интенсивные тренировки': 65 }
  ];

  // Радиальные данные для ключевых показателей
  const radialData = [
    { name: 'Военный вуз', value: 70.6, fill: '#2E8B57' },
    { name: 'Физ. факультет', value: 29.2, fill: '#FF6B6B' }
  ];

  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  const MILITARY_COLOR = '#2E8B57';
  const PHYSFAC_COLOR = '#FF6B6B';

  const StatCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
    <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-6 rounded-xl shadow-lg border border-${color}-200 transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold text-${color}-600`}>{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <Icon className={`h-12 w-12 text-${color}-500 opacity-80`} />
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${entry.value}${typeof entry.value === 'number' && entry.value < 100 ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const chartNavigation = [
    { id: 0, name: 'Общее сравнение', icon: Users },
    { id: 1, name: 'Утренняя зарядка', icon: Activity },
    { id: 2, name: 'Виды спорта', icon: Award },
    { id: 3, name: 'Прогнозы', icon: TrendingUp },
    { id: 4, name: 'Бюджет', icon: DollarSign },
    { id: 5, name: 'Динамика', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Военно-прикладные методы физической подготовки
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сравнительный анализ эффективности военной системы физической подготовки
          </p>
        </div>

        {/* Статистические карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={Users} 
            title="Участников исследования" 
            value="150" 
            subtitle="102 курсанта + 48 студентов"
            color="blue"
          />
          <StatCard 
            icon={TrendingUp} 
            title="Превосходство" 
            value="3x" 
            subtitle="по ключевым показателям"
            color="green"
          />
          <StatCard 
            icon={Target} 
            title="Целевой рост" 
            value="60%" 
            subtitle="ежедневной активности"
            color="purple"
          />
          <StatCard 
            icon={DollarSign} 
            title="Бюджет проекта" 
            value="395k" 
            subtitle="руб. в первый год"
            color="orange"
          />
        </div>

        {/* Навигация по графикам */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {chartNavigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveChart(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeChart === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </button>
          ))}
        </div>

        {/* График 1: Основное сравнение */}
        {activeChart === 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Сравнительный анализ физической активности
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <defs>
                      <linearGradient id="militaryGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={MILITARY_COLOR} stopOpacity={0.9}/>
                        <stop offset="95%" stopColor={MILITARY_COLOR} stopOpacity={0.6}/>
                      </linearGradient>
                      <linearGradient id="physfacGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={PHYSFAC_COLOR} stopOpacity={0.9}/>
                        <stop offset="95%" stopColor={PHYSFAC_COLOR} stopOpacity={0.6}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="category" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      fontSize={12}
                      tick={{ fill: '#666' }}
                    />
                    <YAxis 
                      label={{ value: 'Проценты (%)', angle: -90, position: 'insideLeft' }}
                      tick={{ fill: '#666' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      dataKey="Военный вуз" 
                      fill="url(#militaryGrad)" 
                      name="Военный вуз"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="Физ. факультет" 
                      fill="url(#physfacGrad)" 
                      name="Физический факультет"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Ключевые выводы:</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Военная система в 3.2 раза эффективнее</li>
                    <li>• 70.6% интенсивно тренируются</li>
                    <li>• Дисциплина играет ключевую роль</li>
                  </ul>
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" data={radialData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip content={<CustomTooltip />} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* График 2: Утренняя зарядка */}
        {activeChart === 1 && (
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Отношение к утренней зарядке
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={morningExerciseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fill: '#666' }} />
                <YAxis 
                  label={{ value: 'Проценты (%)', angle: -90, position: 'insideLeft' }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="Ежедневная зарядка" 
                  stackId="1" 
                  stroke="#2E8B57" 
                  fill="url(#exerciseGrad)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="Интенсивные тренировки" 
                  stackId="2" 
                  stroke="#4ECDC4" 
                  fill="url(#trainingGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Этап 1 (0-3 мес.)</h3>
                <p className="text-sm text-green-700">Внедрение базовых программ и мотивационных мероприятий</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Этап 2 (3-9 мес.)</h3>
                <p className="text-sm text-blue-700">Активное внедрение военно-прикладных методик</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Этап 3 (9-12 мес.)</h3>
                <p className="text-sm text-purple-700">Достижение целевых показателей и закрепление результатов</p>
              </div>
            </div>
          </div>
        )}

        {/* Дополнительная аналитика */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Ключевые факторы успеха военной системы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Дисциплина</h3>
              <p className="text-sm text-gray-600">Строгий распорядок дня и обязательность выполнения</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Системность</h3>
              <p className="text-sm text-gray-600">Комплексный подход к физической подготовке</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Мотивация</h3>
              <p className="text-sm text-gray-600">Четкие цели и система поощрений</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Контроль</h3>
              <p className="text-sm text-gray-600">Регулярный мониторинг и оценка прогресса</p>
            </div>
          </div>
        </div>

        {/* Заключение и рекомендации */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Выводы и рекомендации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">📊 Результаты исследования:</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Военная система показывает превосходство по всем ключевым показателям</li>
                <li>• Ежедневная зарядка: 47.1% vs 14.6% (разница в 3.2 раза)</li>
                <li>• Интенсивные тренировки: 70.6% vs 29.2% (разница в 2.4 раза)</li>
                <li>• Значительно меньше студентов полностью избегают физической активности</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🎯 Рекомендации по внедрению:</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Поэтапное внедрение военно-прикладных методик</li>
                <li>• Создание системы мотивации и поощрений</li>
                <li>• Регулярный мониторинг и контроль результатов</li>
                <li>• Адаптация под специфику гражданского образования</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Информация об исследовании */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-2xl text-center border border-gray-300">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📋 Информация об исследовании
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Исследование проведено командой из 6 студентов физического факультета
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800">Участники анкетирования</div>
                <div className="text-2xl font-bold text-blue-600">150</div>
                <div className="text-gray-600">102 курсанта + 48 студентов</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800">Период исследования</div>
                <div className="text-2xl font-bold text-green-600">2024</div>
                <div className="text-gray-600">Сравнительный анализ</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800">Методология</div>
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Анкетирование и анализ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDashboard;Key="category" tick={{ fill: '#666' }} />
                <YAxis 
                  label={{ value: 'Проценты (%)', angle: -90, position: 'insideLeft' }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="military" 
                  fill={MILITARY_COLOR} 
                  name="Военный вуз"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="physfac" 
                  fill={PHYSFAC_COLOR} 
                  name="Физический факультет"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Анализ:</strong> 47.1% курсантов делают зарядку ежедневно против 14.6% студентов физфака
              </p>
            </div>
          </div>
        )}

        {/* График 3: Популярные виды спорта */}
        {activeChart === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Военный вуз
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={militarySportsData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" domain={[0, 80]} tick={{ fill: '#666' }} />
                  <YAxis dataKey="sport" type="category" width={120} fontSize={11} tick={{ fill: '#666' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="percentage" fill={MILITARY_COLOR} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Физический факультет
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={physFacSportsData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" domain={[0, 60]} tick={{ fill: '#666' }} />
                  <YAxis dataKey="sport" type="category" width={120} fontSize={11} tick={{ fill: '#666' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="percentage" fill={PHYSFAC_COLOR} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* График 4: Прогнозируемые результаты */}
        {activeChart === 3 && (
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Прогнозируемые результаты внедрения (через 1 год)
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={forecastData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <defs>
                  <linearGradient id="currentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="indicator" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  fontSize={12}
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  label={{ value: 'Проценты (%)', angle: -90, position: 'insideLeft' }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="current" 
                  fill="url(#currentGrad)" 
                  name="Текущее состояние"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="target" 
                  fill="url(#targetGrad)" 
                  name="Целевые показатели"
                  radius={[4, 4, 0, 0]}
                />
                <Line 
                  type="monotone" 
                  dataKey="improvement" 
                  stroke="#2E8B57" 
                  strokeWidth={3} 
                  name="Улучшение"
                  dot={{ fill: '#2E8B57', strokeWidth: 2, r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* График 5: Бюджет проекта */}
        {activeChart === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Единовременные расходы
                </h2>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                  320,000 руб.
                </span>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value.toLocaleString()} руб.`, 'Сумма']}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {budgetData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span>{item.category}</span>
                    </div>
                    <span className="font-medium">{item.amount.toLocaleString()} руб.</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Ежемесячные расходы
                </h2>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  75,000 руб.
                </span>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyBudgetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="category" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    fontSize={10}
                    tick={{ fill: '#666' }}
                  />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip 
                    formatter={(value) => [`${value.toLocaleString()} руб.`, 'Сумма']}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="#8884D8"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* График 6: Динамика внедрения */}
        {activeChart === 5 && (
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Планируемая динамика показателей по этапам внедрения
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={implementationData}>
                <defs>
                  <linearGradient id="exerciseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E8B57" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2E8B57" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="trainingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis data
                                <XAxis dataKey="month" tick={{ fill: '#666' }} />
                <YAxis 
                  label={{ value: 'Проценты (%)', angle: -90, position: 'insideLeft' }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="Ежедневная зарядка" 
                  stackId="1" 
                  stroke="#2E8B57" 
                  fill="url(#exerciseGrad)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="Интенсивные тренировки" 
                  stackId="2" 
                  stroke="#4ECDC4" 
                  fill="url(#trainingGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartDashboard;
