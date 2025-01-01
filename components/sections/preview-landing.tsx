import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-20">
      <MaxWidthWrapper>
        <div className="h-auto rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              src="https://camo.githubusercontent.com/d1b3dcd1f2c6479ef635ec709fb194642f0da44374b27239526a81db1d6ec9f1/68747470733a2f2f64616d2e6d616c742e636f6d2f39353363343838622d353831652d343463632d623033392d3131326266343436323931393f6f72675f69665f736d6c3d313f773d3139323026683d313932302666756e633d626f756e64"
              alt="Preview of the application interface"
              width={1920}
              height={1920}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
