import { Loading } from "@shared/components/Loading";
import { useAppModel } from "@shared/models/AppModel";
import { FC, ReactNode } from "react";

export const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading } = useAppModel();
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return <div className="container">{children}</div>;
};
