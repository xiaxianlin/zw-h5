import { animated, useScroll, useSpring, useSpringValue } from "@react-spring/web";
import { AssetElement, AbsoluteElement, ScrollListenerElement } from "@shared/components";
import { AppLayout } from "@shared/layouts/AppLayout";
import { AppModel } from "@shared/models/AppModel";
import { useEffect } from "react";

export function DemoContent() {
  const opacity = useSpringValue(0);

  const [springs, api] = useSpring(() => ({
    from: { x: -100 },
    to: { x: 0 },
  }));

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    opacity.start(1, { config: { duration: 2000 } });
    scrollYProgress.to((y) => {
      console.log(y);
    });
  }, [scrollYProgress]);
  return (
    <div style={{ position: "relative" }}>
      <AssetElement width={750} height={8004} assetKey="bg" />
      <AbsoluteElement x={20} y={200}>
        <animated.div style={{ opacity }}>Hello World</animated.div>
      </AbsoluteElement>

      <ScrollListenerElement>
        <AbsoluteElement x={0} y={600}>
          <animated.div style={springs}>slide</animated.div>
        </AbsoluteElement>
      </ScrollListenerElement>
    </div>
  );
}

export function DemoApp() {
  return (
    <AppModel.Provider initialState={{ width: 750, mainAseets: { bg: "./images/demo.jpg" } }}>
      <AppLayout>
        <DemoContent />
      </AppLayout>
    </AppModel.Provider>
  );
}
