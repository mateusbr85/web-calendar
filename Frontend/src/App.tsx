import { ThemeProvider } from './context/ThemeProvider';
import { DashboardRoutes } from './routes/Dashboard.routes';
import { SpeedInsights } from "@vercel/speed-insights/react";
import 'rsuite/dist/rsuite.min.css';


function App() {

  return (
    <ThemeProvider defaultTheme=''>
      <DashboardRoutes/>
      <SpeedInsights/>
    </ThemeProvider>
  )
}

export default App
