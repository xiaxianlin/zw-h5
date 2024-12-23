import { Loading } from "@shared/components/Loading";
import { useAppModel } from "@shared/models/AppModel";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useAppModel();
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return <div className="container">{children}</div>;
}
