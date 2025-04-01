
import { Routes as RoutesDom, Route, BrowserRouter } from "react-router-dom";
import { PanelPage } from "./app/main/panel";
import { RootLayout } from "./app/main/layout";
import { AuthLayout } from "./app/auth/layout";
import { OnboardLayout } from "./app/onboard/layout";
import { LabelsPage } from "./app/main/labels";
import { SettingsPage } from "./app/main/settings";
import { MovementsPage } from "./app/main/movements";


export function Routes() {

    return (
        <div>
            <BrowserRouter>
                <RoutesDom>
                    <Route path="/" element={<RootLayout />}>
                        <Route path="panel" element={<PanelPage />} />
                        <Route path="movements" element={<MovementsPage />} />
                        <Route path="labels" element={<LabelsPage/>} />
                        <Route path="settings" element={<SettingsPage/>} />
                    </Route>

                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="login" element={<>login</>} />
                        <Route path="register" element={<>Register</>} />
                    </Route>

                    <Route path='/onboard' element={<OnboardLayout />}>
                        <Route path='step1' element={<h1>Step 1</h1>} />
                        <Route path='step2' element={<h1>Step 2</h1>} />
                    </Route>

                    <Route path='*' element={<h1>Error</h1>} />
                </RoutesDom>
            </BrowserRouter>
        </div>
    )
}


