import { ThemeProvider } from './context/ThemeProvider';
import { DashboardRoutes } from './routes/Dashboard.routes';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <ThemeProvider defaultTheme=''>
      <DashboardRoutes/>
      <SpeedInsights/>
    </ThemeProvider>
  )
}

export default App
