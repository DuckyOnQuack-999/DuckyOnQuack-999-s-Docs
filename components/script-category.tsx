"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ScriptCategoryProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  scripts: string[];
  description: string;
  tags?: string[];
}

export function ScriptCategory({
  title,
  icon: Icon,
  iconColor,
  scripts,
  description,
  tags
}: ScriptCategoryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${iconColor}`} />
            {title}
          </CardTitle>
          {tags && (
            <div className="flex gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {scripts.map((script) => (
            <li key={script} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              {script}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}