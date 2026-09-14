import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { 
  monthlyRevenue, 
  topCountriesByRevenue, 
  topProductsByQuantity, 
  topProductsByRevenue, 
  topCustomersByRevenue,
  transactionStatus
} from '../../data/projectData';
import { TrendingUp, Globe, ShoppingBag, Users, RotateCcw } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const CustomTooltip = ({ active, payload, label, prefix = '', suffix = '' }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-xl">
        <p className="text-muted-foreground font-medium mb-1">{label}</p>
        <p className="text-blue-500 font-bold text-lg">
          {prefix}{Number(payload[0].value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}{suffix}
        </p>
      </div>
    );
  }
  return null;
};

const InteractiveAnalysis = () => {
  const { theme } = useTheme();
  
  const gridColor = theme === 'dark' ? '#1e293b' : '#e2e8f0';
  const textColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const cursorColor = theme === 'dark' ? '#1e293b' : '#f1f5f9';
  const tooltipBg = theme === 'dark' ? '#0f172a' : '#ffffff';
  const tooltipBorder = theme === 'dark' ? '#334155' : '#e2e8f0';
  const tooltipText = theme === 'dark' ? '#f8fafc' : '#1e293b';

  return (
    <section id="analysis" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Exploratory Data Analysis</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Interactive web visualizations answering the core business questions.</p>
        </div>

        <div className="space-y-8">
          {/* Monthly Revenue Chart */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                Monthly Revenue Trend
              </h3>
              <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/20 max-w-xs text-right">
                Insight: November 2011 recorded the highest monthly revenue at 1.46M.
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis dataKey="month" stroke={textColor} tick={{ fill: textColor }} tickMargin={10} />
                  <YAxis stroke={textColor} tick={{ fill: textColor }} tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip content={<CustomTooltip prefix="$" />} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Country Analysis */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center mb-6">
                <Globe className="w-5 h-5 text-cyan-500 mr-2" />
                Top 10 Countries by Revenue
              </h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topCountriesByRevenue} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
                    <XAxis type="number" stroke={textColor} tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                    <YAxis dataKey="country" type="category" stroke={textColor} width={90} />
                    <Tooltip content={<CustomTooltip prefix="$" />} cursor={{fill: cursorColor}} />
                    <Bar dataKey="revenue" fill="#06b6d4" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">Top 5 countries contribute ~93.91% of total revenue. UK is dominant.</p>
            </div>

            {/* Customer Analysis */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center mb-6">
                <Users className="w-5 h-5 text-indigo-500 mr-2" />
                Top 10 Customers by Revenue
              </h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topCustomersByRevenue} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="customerId" stroke={textColor} angle={-45} textAnchor="end" tick={{fontSize: 12}} />
                    <YAxis stroke={textColor} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                    <Tooltip content={<CustomTooltip prefix="$" />} cursor={{fill: cursorColor}} />
                    <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">Average revenue per customer is approx $1,893.53.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Products by Quantity */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center mb-6">
                <ShoppingBag className="w-5 h-5 text-emerald-500 mr-2" />
                Top 10 Products by Quantity
              </h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProductsByQuantity} layout="vertical" margin={{ top: 5, right: 30, left: 140, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
                    <XAxis type="number" stroke={textColor} />
                    <YAxis dataKey="product" type="category" stroke={textColor} width={150} tick={{fontSize: 10}} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: cursorColor}} />
                    <Bar dataKey="quantity" fill="#10b981" radius={[0, 4, 4, 0]} barSize={15} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Products by Revenue */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center mb-6">
                <ShoppingBag className="w-5 h-5 text-blue-500 mr-2" />
                Top 10 Products by Revenue
              </h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProductsByRevenue} layout="vertical" margin={{ top: 5, right: 30, left: 140, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
                    <XAxis type="number" stroke={textColor} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                    <YAxis dataKey="product" type="category" stroke={textColor} width={150} tick={{fontSize: 10}} />
                    <Tooltip content={<CustomTooltip prefix="$" />} cursor={{fill: cursorColor}} />
                    <Bar dataKey="revenue" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={15} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">* Filtered out non-product entries (e.g., DOTCOM POSTAGE, Manual) to reflect actual retail product performance.</p>
            </div>
          </div>
          
          {/* Returns & Cancellations */}
          <div className="bg-card border border-border rounded-2xl p-6 max-w-3xl mx-auto shadow-sm">
             <h3 className="text-xl font-bold text-foreground flex items-center justify-center mb-6">
                <RotateCcw className="w-5 h-5 text-rose-500 mr-2" />
                Returns & Cancellations Impact
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="h-[250px] w-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={transactionStatus}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {transactionStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{backgroundColor: tooltipBg, borderColor: tooltipBorder}} 
                        itemStyle={{color: tooltipText}}
                        formatter={(value: number) => [`${value}%`, 'Percentage']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {transactionStatus.map((status) => (
                    <div key={status.name} className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: status.fill }} />
                      <div className="flex flex-col">
                        <span className="text-muted-foreground font-medium">{status.name}</span>
                        <span className="text-2xl font-bold text-foreground">{status.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveAnalysis;
