import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const StashAnalytics = () => {
  return (
    <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">📈</span>
            Stash Analytics
          </CardTitle>
          <CardDescription>Insights about your collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-gray-800">Most Common Type</h4>
              <p className="text-sm text-gray-600">Indica (50%)</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-semibold text-gray-800">Average THC</h4>
              <p className="text-sm text-gray-600">21.25%</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-200">
              <div className="text-2xl mb-2">⭐</div>
              <h4 className="font-semibold text-gray-800">
                Most Common Category
              </h4>
              <p className="text-sm text-gray-600">Flower</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StashAnalytics;
