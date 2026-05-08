// ── DATA STORE ──
const DB = {
  get: k => JSON.parse(localStorage.getItem(k) || 'null'),
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  init() {
    if (!this.get('cms_init')) {
      this.set('users', [
        { id: 1, name: 'Dr. Admin Singh', email: 'admin@amity.edu', password: 'admin123', role: 'admin' },
        { id: 2, name: 'Prof. Ramesh Kumar', email: 'faculty@amity.edu', password: 'faculty123', role: 'faculty', dept: 'Computer Science', subject: 'DBMS' },
        { id: 3, name: 'Rahul Sharma', email: 'student@amity.edu', password: 'student123', role: 'student', rollNo: 'CS2021001', course: 'B.Tech CSE', semester: 5 }
      ]);
      this.set('students', [
        { id: 1, rollNo: 'CS2021001', name: 'Rahul Sharma', email: 'rahul@amity.edu', phone: '9876543210', course: 'B.Tech CSE', semester: 5, dob: '2002-05-15', address: 'Delhi', status: 'active', fees: 'paid' },
        { id: 2, rollNo: 'CS2021002', name: 'Priya Verma', email: 'priya@amity.edu', phone: '9876543211', course: 'B.Tech CSE', semester: 5, dob: '2002-08-22', address: 'Mumbai', status: 'active', fees: 'pending' },
        { id: 3, rollNo: 'CS2021003', name: 'Amit Patel', email: 'amit@amity.edu', phone: '9876543212', course: 'B.Tech IT', semester: 3, dob: '2003-01-10', address: 'Ahmedabad', status: 'active', fees: 'paid' },
        { id: 4, rollNo: 'ME2021001', name: 'Sneha Gupta', email: 'sneha@amity.edu', phone: '9876543213', course: 'B.Tech ME', semester: 3, dob: '2003-03-18', address: 'Pune', status: 'active', fees: 'paid' },
        { id: 5, rollNo: 'CS2022001', name: 'Vikram Singh', email: 'vikram@amity.edu', phone: '9876543214', course: 'B.Tech CSE', semester: 1, dob: '2004-07-25', address: 'Jaipur', status: 'inactive', fees: 'pending' },
        { id: 6, rollNo: 'EC2021001', name: 'Anjali Mishra', email: 'anjali@amity.edu', phone: '9876543215', course: 'B.Tech ECE', semester: 5, dob: '2002-11-12', address: 'Lucknow', status: 'active', fees: 'paid' },
        { id: 7, rollNo: 'IT2022001', name: 'Rohan Tiwari', email: 'rohan@amity.edu', phone: '9876543216', course: 'B.Tech IT', semester: 3, dob: '2003-06-20', address: 'Bhopal', status: 'active', fees: 'pending' },
      ]);
      this.set('faculty', [
        { id: 1, empId: 'FAC001', name: 'Prof. Ramesh Kumar', email: 'ramesh@amity.edu', phone: '9811111111', dept: 'Computer Science', subject: 'DBMS', qualification: 'Ph.D', experience: 12, status: 'active' },
        { id: 2, empId: 'FAC002', name: 'Dr. Sunita Rao', email: 'sunita@amity.edu', phone: '9822222222', dept: 'Computer Science', subject: 'Data Structures', qualification: 'Ph.D', experience: 8, status: 'active' },
        { id: 3, empId: 'FAC003', name: 'Mr. Anil Mehta', email: 'anil@amity.edu', phone: '9833333333', dept: 'Mathematics', subject: 'Calculus', qualification: 'M.Tech', experience: 5, status: 'active' },
        { id: 4, empId: 'FAC004', name: 'Ms. Kavita Joshi', email: 'kavita@amity.edu', phone: '9844444444', dept: 'Physics', subject: 'Engineering Physics', qualification: 'M.Sc', experience: 7, status: 'active' },
        { id: 5, empId: 'FAC005', name: 'Dr. Pradeep Sharma', email: 'pradeep@amity.edu', phone: '9855555555', dept: 'Electronics', subject: 'Digital Electronics', qualification: 'Ph.D', experience: 10, status: 'active' },
      ]);
      this.set('courses', [
        { id: 1, code: 'CS301', name: 'Database Management System', dept: 'Computer Science', credits: 4, semester: 5, faculty: 'Prof. Ramesh Kumar', type: 'Core' },
        { id: 2, code: 'CS302', name: 'Data Structures & Algorithms', dept: 'Computer Science', credits: 4, semester: 3, faculty: 'Dr. Sunita Rao', type: 'Core' },
        { id: 3, code: 'MA101', name: 'Engineering Mathematics', dept: 'Mathematics', credits: 3, semester: 1, faculty: 'Mr. Anil Mehta', type: 'Core' },
        { id: 4, code: 'PH101', name: 'Engineering Physics', dept: 'Physics', credits: 3, semester: 1, faculty: 'Ms. Kavita Joshi', type: 'Core' },
        { id: 5, code: 'CS401', name: 'Operating Systems', dept: 'Computer Science', credits: 4, semester: 7, faculty: 'Dr. Sunita Rao', type: 'Core' },
        { id: 6, code: 'EC301', name: 'Digital Electronics', dept: 'Electronics', credits: 4, semester: 5, faculty: 'Dr. Pradeep Sharma', type: 'Core' },
      ]);
      this.set('attendance', [
        { id: 1, studentId: 1, courseId: 1, date: '2024-01-15', status: 'present' },
        { id: 2, studentId: 2, courseId: 1, date: '2024-01-15', status: 'present' },
        { id: 3, studentId: 1, courseId: 1, date: '2024-01-16', status: 'absent' },
        { id: 4, studentId: 2, courseId: 1, date: '2024-01-16', status: 'present' },
        { id: 5, studentId: 1, courseId: 1, date: '2024-01-17', status: 'present' },
        { id: 6, studentId: 2, courseId: 1, date: '2024-01-17', status: 'absent' },
        { id: 7, studentId: 3, courseId: 2, date: '2024-01-15', status: 'present' },
        { id: 8, studentId: 3, courseId: 2, date: '2024-01-16', status: 'present' },
      ]);
      this.set('grades', [
        { id: 1, studentId: 1, courseId: 1, internal: 38, external: 52, total: 90, grade: 'A', semester: 5 },
        { id: 2, studentId: 2, courseId: 1, internal: 32, external: 48, total: 80, grade: 'A', semester: 5 },
        { id: 3, studentId: 1, courseId: 2, internal: 40, external: 55, total: 95, grade: 'A+', semester: 3 },
        { id: 4, studentId: 3, courseId: 2, internal: 28, external: 42, total: 70, grade: 'B+', semester: 3 },
        { id: 5, studentId: 4, courseId: 2, internal: 35, external: 50, total: 85, grade: 'A', semester: 3 },
        { id: 6, studentId: 6, courseId: 6, internal: 36, external: 49, total: 85, grade: 'A', semester: 5 },
      ]);
      this.set('notices', [
        { id: 1, title: 'Mid-Semester Examination Schedule', content: 'Mid-semester exams will be held from 15th February to 22nd February 2024. Students are advised to check the detailed timetable on the notice board.', type: 'urgent', date: '2024-01-20', author: 'Exam Cell', target: 'all' },
        { id: 2, title: 'Annual Sports Day Registration', content: 'Annual Sports Day will be held on 10th March 2024. Students interested in participating should register before 28th February.', type: 'info', date: '2024-01-18', author: 'Sports Committee', target: 'students' },
        { id: 3, title: 'Faculty Development Program', content: 'A Faculty Development Program on AI & ML will be conducted on 5th February 2024. All faculty members are requested to attend.', type: 'general', date: '2024-01-17', author: 'Principal Office', target: 'faculty' },
        { id: 4, title: 'Library Timing Change', content: 'Library will remain open from 8 AM to 9 PM effective from 1st February 2024.', type: 'info', date: '2024-01-15', author: 'Library', target: 'all' },
      ]);
      this.set('cms_init', true);
    }
  }
};

// ── AUTH ──
const Auth = {
  login(email, password, role) {
    const users = DB.get('users') || [];
    return users.find(u => u.email === email && u.password === password && u.role === role) || null;
  },
  current() { return DB.get('cms_user'); },
  set(user) { DB.set('cms_user', user); },
  logout() { localStorage.removeItem('cms_user'); window.location.href = 'index.html'; },
  guard() {
    const u = this.current();
    if (!u) { window.location.href = 'index.html'; return null; }
    return u;
  }
};

// ── UTILS ──
function toast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  const icons = { success: 'bi-check-circle-fill', error: 'bi-x-circle-fill', warning: 'bi-exclamation-triangle-fill' };
  t.innerHTML = `<i class="bi ${icons[type]||icons.success} me-2"></i>${msg}`;
  t.className = `toast-msg show ${type}`;
  setTimeout(() => t.className = 'toast-msg', 3000);
}

function genId(arr) { return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1; }

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function renderSidebar(activeKey) {
  const user = Auth.current();
  if (!user) return '';
  const menus = {
    admin: [
      { key: 'dashboard', icon: 'bi-speedometer2', label: 'Dashboard', href: 'dashboard.html' },
      { key: 'students', icon: 'bi-mortarboard-fill', label: 'Students', href: 'students.html' },
      { key: 'faculty', icon: 'bi-person-workspace', label: 'Faculty', href: 'faculty.html' },
      { key: 'courses', icon: 'bi-book-fill', label: 'Courses', href: 'courses.html' },
      { key: 'attendance', icon: 'bi-calendar-check-fill', label: 'Attendance', href: 'attendance.html' },
      { key: 'grades', icon: 'bi-bar-chart-fill', label: 'Grades & Results', href: 'grades.html' },
      { key: 'notices', icon: 'bi-megaphone-fill', label: 'Notice Board', href: 'notices.html' },
    ],
    faculty: [
      { key: 'dashboard', icon: 'bi-speedometer2', label: 'Dashboard', href: 'dashboard.html' },
      { key: 'courses', icon: 'bi-book-fill', label: 'My Courses', href: 'courses.html' },
      { key: 'attendance', icon: 'bi-calendar-check-fill', label: 'Attendance', href: 'attendance.html' },
      { key: 'grades', icon: 'bi-bar-chart-fill', label: 'Grades', href: 'grades.html' },
      { key: 'notices', icon: 'bi-megaphone-fill', label: 'Notice Board', href: 'notices.html' },
    ],
    student: [
      { key: 'dashboard', icon: 'bi-speedometer2', label: 'Dashboard', href: 'dashboard.html' },
      { key: 'courses', icon: 'bi-book-fill', label: 'My Courses', href: 'courses.html' },
      { key: 'attendance', icon: 'bi-calendar-check-fill', label: 'My Attendance', href: 'attendance.html' },
      { key: 'grades', icon: 'bi-bar-chart-fill', label: 'My Grades', href: 'grades.html' },
      { key: 'notices', icon: 'bi-megaphone-fill', label: 'Notice Board', href: 'notices.html' },
    ]
  };
  const items = menus[user.role] || [];
  const roleColors = { admin: 'bg-danger', faculty: 'bg-success', student: 'bg-primary' };
  const roleLabel = { admin: 'Administrator', faculty: 'Faculty Member', student: 'Student' };
  return `
    <div class="sidebar-brand d-flex align-items-center gap-2 px-3 py-3">
      <div class="brand-icon"><i class="bi bi-building-fill"></i></div>
      <div><div class="brand-name">Amity University</div><div class="brand-sub">Raipur Campus</div></div>
    </div>
    <div class="sidebar-user mx-3 my-2 p-3 rounded-3">
      <div class="d-flex align-items-center gap-2">
        <div class="user-avatar ${roleColors[user.role]}">${getInitials(user.name)}</div>
        <div class="overflow-hidden">
          <div class="user-name text-truncate">${user.name}</div>
          <span class="user-role-badge">${roleLabel[user.role]}</span>
        </div>
      </div>
    </div>
    <div class="sidebar-section-label px-3 mt-2">NAVIGATION</div>
    <nav class="sidebar-nav px-2">
      ${items.map(m => `
        <a href="${m.href}" class="sidebar-link ${activeKey === m.key ? 'active' : ''}">
          <i class="bi ${m.icon}"></i>
          <span>${m.label}</span>
          ${activeKey === m.key ? '<i class="bi bi-chevron-right ms-auto"></i>' : ''}
        </a>`).join('')}
    </nav>
    <div class="sidebar-footer px-3 py-3 mt-auto">
      <button class="btn btn-logout w-100" onclick="Auth.logout()">
        <i class="bi bi-box-arrow-left me-2"></i>Logout
      </button>
    </div>`;
}

// Reset stale data
if (DB.get('cms_version') !== '3') {
  ['cms_init','cms_user','students','faculty','courses','attendance','grades','notices','users'].forEach(k => localStorage.removeItem(k));
  DB.set('cms_version', '3');
}
DB.init();
