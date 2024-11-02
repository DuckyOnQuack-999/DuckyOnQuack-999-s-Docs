"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ScriptDetailsProps {
  name: string;
  description: string;
  usage: string;
  requirements?: string[];
  warnings?: string[];
  tags?: string[];
}

export function ScriptDetails({
  name,
  description,
  usage,
  requirements,
  warnings,
  tags
}: ScriptDetailsProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="font-mono">{name}</CardTitle>
          {tags && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold">Usage</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{usage}</code>
          </pre>
        </div>

        {requirements && (
          <div className="space-y-2">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <span className="font-semibold">Requirements:</span>
                <ul className="list-disc list-inside mt-2">
                  {requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {warnings && warnings.length > 0 && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <ul className="list-disc list-inside">
                {warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}