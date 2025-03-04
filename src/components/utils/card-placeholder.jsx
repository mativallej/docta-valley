import * as React from "react"
 
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
 
export default function CardPlaceholder() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}