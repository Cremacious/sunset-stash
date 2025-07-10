import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StashAnalytics = () => {
  return (
    <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-2 md:p-6">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 text-center">
            Stash Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-purple-100 rounded-lg">
              <div className="flex flex-col items-center space-y-2">
                <h4 className="font-semibold text-gray-800">Stash Count</h4>
                <p className=" bg-purple-900 text-white p-4 rounded-full font-bold">
                  21 items
                </p>
              </div>
            </div>
            <div className="text-center p-4 bg-purple-100 rounded-lg">
              <div className="flex flex-col items-center space-y-2">
                <h4 className="font-semibold text-gray-800">
                  Most Common Type
                </h4>
                <p className=" bg-purple-900 text-white p-4 rounded-full font-bold">
                  Indica
                </p>
              </div>
            </div>
            <div className="text-center p-4 bg-purple-100 rounded-lg">
              <div className="flex flex-col items-center space-y-2">
                <h4 className="font-semibold text-gray-800">
                  Most Common Category
                </h4>
                <p className=" bg-purple-900 text-white p-4 rounded-full font-bold">
                  Flower
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StashAnalytics;
