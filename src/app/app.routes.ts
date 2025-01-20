import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'aboutus',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'team',
        loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule)
    },
    {
        path: 'history-milestone',
        loadChildren: () => import('./features/milestone/milestone.module').then(m => m.MilestoneModule)
    },
    {
        path: 'awards',
        loadChildren: () => import('./features/awards/awards.module').then(m => m.AwardsModule)
    },
    {
        path: 'mining',
        loadChildren: () => import('./features/mining/mining.module').then(m => m.MiningModule)
    },
    {
        path: 'companies',
        loadChildren: () => import('./features/company/company.module').then(m => m.CompanyModule)
    },
    {
        path: 'csr',
        loadChildren: () => import('./features/csr/csr.module').then(m => m.CsrModule)
    },
    {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'career',
        loadChildren: () => import('./features/career/career.module').then(m => m.CareerModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }