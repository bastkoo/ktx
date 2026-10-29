
function App() {
  return (
    <div className="min-h-screen bg-ktx-background">
      {/* Thanh điều hướng */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-ktx-border bg-ktx-surface md:block">
        <div className="flex h-20 items-center gap-3 border-b border-ktx-border px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ktx-accent-soft font-bold text-ktx-accent">
            K
          </div>

          <div>
            <h1 className="font-bold text-ktx-text">KTX</h1>
            <p className="text-xs text-ktx-text-muted">Đại học Huế</p>
          </div>
        </div>

        <nav className="space-y-2 p-4">
          <div className="rounded-lg bg-[#EAF0F5] px-4 py-3 font-medium text-ktx-primary">
            Tổng quan
          </div>
        </nav>
      </aside>

      {/* Khu vực nội dung */}
      <div className="md:ml-64">
        <header className="flex h-20 items-center justify-between border-b border-ktx-border bg-ktx-surface px-6">
          <h2 className="text-lg font-semibold text-ktx-text">
            Hệ thống quản lý ký túc xá
          </h2>

          <span className="rounded-full bg-ktx-accent-soft px-3 py-2 text-sm text-ktx-accent">
            Đại học Huế
          </span>
        </header>

        <main className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-ktx-text">
            Chào mừng đến với KTX
          </h2>

          <p className="mt-2 text-ktx-text-muted">
            Không gian quản lý ký túc xá tập trung và thuận tiện.
          </p>

          <section className="mt-8 rounded-xl border border-ktx-border bg-ktx-surface p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0F5] text-ktx-primary">
              <span className="text-xl font-bold">K</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-ktx-text">
              Khung giao diện KTX
            </h3>

            <p className="mt-2 text-sm leading-6 text-ktx-text-muted">
              Giao diện cơ bản đã sẵn sàng. Các chức năng sẽ được
              bổ sung sau khi thống nhất yêu cầu nghiệp vụ.
            </p>
          </section>
         
        </main>
      </div>
    </div>
  )
}

export default App
