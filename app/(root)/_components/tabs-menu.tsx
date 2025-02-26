import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Tebs() {
  return (
    <Tabs defaultValue="account" className="w-full h-[35rem] flex">
      <TabsList className=" w-full  flex ">
        <div className="flex flex-col w-[15rem] h-full ">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
       
       
        </div>
        <TabsContent value="account" className="w-full h-full flex">
        <ResizablePanelGroup
      direction="horizontal"
      className=" rounded-lg border "
    >
      <ResizablePanel defaultSize={50} >
        <div className="flex w-full bg-red-500 h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex w h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
      </TabsContent>

      <TabsContent value="document">


      </TabsContent>
      </TabsList>
     
    </Tabs>
  )
}
