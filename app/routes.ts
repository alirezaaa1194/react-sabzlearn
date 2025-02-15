import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('*', 'routes/NotFound.tsx'),
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
                route('sendQuestion', 'actions/SendQuestion/SendQuestion.ts'),
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
            route('my-account/add-ticket', 'routes/user-panel/add-ticket.tsx'),
            route('my-account/view-ticket/:ticketId', 'routes/user-panel/view-ticket.tsx'),
            route('my-account/edit-account', 'routes/user-panel/edit-account.tsx'),
        ]),
    ])
]),


layout('./layouts/admin-panel/AdminLayout.tsx',[
    route('admin-panel','routes/admin-panel/Dashboard.tsx'),
    route('admin-panel/courses','routes/admin-panel/Courses.tsx'),
    route('admin-panel/lessons','routes/admin-panel/Lessons.tsx'),
    route('admin-panel/comments','routes/admin-panel/Comments.tsx'),
    route('admin-panel/tickets','routes/admin-panel/Tickets.tsx'),
    route('admin-panel/menus','routes/admin-panel/Menus.tsx'),
    route('admin-panel/blog','routes/admin-panel/Blog.tsx'),
    route('admin-panel/categories','routes/admin-panel/Categories.tsx'),
    route('admin-panel/blog/:articleShortId','routes/admin-panel/DraftArticle.tsx'),
    route('admin-panel/users','routes/admin-panel/Users.tsx'),
    route('admin-panel/edituser/:userId','routes/admin-panel/EditUser.tsx'),
    route('admin-panel/editcourse/:courseShortName','routes/admin-panel/EditCourse.tsx'),
    route('admin-panel/campaign','routes/admin-panel/Campaign.tsx'),
    route('admin-panel/offs','routes/admin-panel/Offs.tsx'),
    
    route('AddCourse','actions/Admin-Panel/Courses/AddCourse.ts'),
    route('RemoveCourse','actions/Admin-Panel/Courses/RemoveCourse.ts'),
    route('EditCourse','actions/Admin-Panel/Courses/EditCourse.ts'),
    
    route('AddLesson','actions/Admin-Panel/Lessons/AddLesson.ts'),
    route('RemoveLesson','actions/Admin-Panel/Lessons/RemoveLesson.ts'),

    route('AcceptComment','actions/Admin-Panel/Comments/AcceptComment.ts'),
    route('RejectComment','actions/Admin-Panel/Comments/RejectComment.ts'),
    route('DeleteComment','actions/Admin-Panel/Comments/DeleteComment.ts'),
    route('AnswerComment','actions/Admin-Panel/Comments/AnswerComment.ts'),

    route('AnswerTicket','actions/Admin-Panel/Tickets/AnswerTicket.ts'),

    route('AddMenu','actions/Admin-Panel/Menus/AddMenu.ts'),
    route('RemoveMenu','actions/Admin-Panel/Menus/RemoveMenu.ts'),

    route('AddCategory','actions/Admin-Panel/Categories/AddCategory.ts'),
    route('RemoveCategory','actions/Admin-Panel/Categories/RemoveCategory.ts'),
    route('EditCategory','actions/Admin-Panel/Categories/EditCategory.ts'),

    route('AddArticle','actions/Admin-Panel/Blog/AddArticle.ts'),
    route('DraftArticle','actions/Admin-Panel/Blog/DraftArticle.ts'),
    route('RemoveArticle','actions/Admin-Panel/Blog/RemoveArticle.ts'),

    route('ChangeUserRole','actions/Admin-Panel/Users/ChangeUserRole.ts'),
    route('RemoveUser','actions/Admin-Panel/Users/RemoveUser.ts'),
    route('BanUser','actions/Admin-Panel/Users/BanUser.ts'),
    route('RegisterUser','actions/Admin-Panel/Users/RegisterUser.ts'),
    route('EditUser','actions/Admin-Panel/Users/EditUser.ts'),

    route('RemoveOff','actions/Admin-Panel/Offs/RemoveOff.ts'),
    route('AddOff','actions/Admin-Panel/Offs/AddOff.ts'),

])

] satisfies RouteConfig;
