import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Authentication() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5 ">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle>Entrar</CardTitle>
              <CardDescription>
                Faça login para continuar.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Email</Label>
                <Input id="email" placeholder="Digite seu email" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Senha</Label>
                <Input id="password" placeholder="Digite sua senha" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Criar conta</CardTitle>
              <CardDescription>
                Crie sua conta para continuar.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Email</Label>
                <Input id="email"  placeholder="Digite seu email" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Senha</Label>
                <Input id="password"  placeholder="Digite sua senha"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Criar conta</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Authentication