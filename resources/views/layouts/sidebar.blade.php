<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ route('feedback') }}">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Feedback</div>
    </a>

    <hr class="sidebar-divider my-0">

    @role('admin')
    <li class="nav-item">
        <a class="nav-link" href="{{ route('admin.feedback.list') }}">
            <i class="fas fa-fw fa-list"></i>
            <span>Feedback List</span></a>
    </li>

    <hr class="sidebar-divider d-none d-md-block">

    <li class="nav-item">
        <a class="nav-link" href="{{ route('feedback') }}">
            <i class="fas fa-fw fa-table"></i>
            <span>Feedback Form</span></a>
    </li>

    <hr class="sidebar-divider d-none d-md-block">
    @endrole
</ul>
<!-- End of Sidebar -->