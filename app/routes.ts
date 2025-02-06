import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./layouts/mainLayout.tsx',[
        layout('./layouts/AuthorizationLayout.tsx',[
            layout('./layouts/general/GeneralLayout.tsx',[
                
                index("routes/home.tsx"),
                route('blogs', 'routes/general/blogs.tsx'),
                route('blog/:blog-name', 'routes/general/blog.tsx'),
                route('courses', 'routes/general/courses.tsx'),
                route('course-cat/:cat-name', 'routes/general/course-cat.tsx'),
                route('course/:course-name', 'routes/general/course.tsx'),
                route('lesson/:course-name/:lesson-id', 'routes/general/lesson.tsx'),
                route('terms-conditions', 'routes/general/terms-conditions.tsx'),
                route('cart', 'routes/general/cart.tsx'),
                
                route('switchTheme', 'actions/Theme/theme.ts'),

                route('saveCartCourses', 'actions/Cart/saveCartCourses.ts'),
                route('RemoveCartCourse', 'actions/Cart/removeCartCourse.ts'),
                route('saveOfferCode', 'actions/Cart/saveOfferCode.ts'),
                route('removOfferCode', 'actions/Cart/removeOfferCode.ts'),
        ]),
        layout('./layouts/auth/AuthLayout.tsx',[
            route('login', 'routes/auth/login.tsx'),
            route('signup', 'routes/auth/signup.tsx'),
            
            route('auth', 'actions/Auth/auth.ts'),
            route('logout', 'actions/Auth/logout.ts'),
        ]),
        
        layout('./layouts/user-panel/UserPanelLayout.tsx',[
            route('my-account', 'routes/user-panel/my-account.tsx'),
            route('my-account/courses', 'routes/user-panel/courses.tsx'),
            route('my-account/tickets', 'routes/user-panel/tickets.tsx'),
            route('my-account/edit-account', 'routes/user-panel/edit-account.tsx'),
        ]),
    ])
])
] satisfies RouteConfig;
