import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { MailCheck } from "lucide-react";

import { AuthCard } from "@/components/AuthCard";
import { EmailPasswordForm } from "@/components/EmailPasswordForm";
import { supabase } from "@/integrations/supabase/client";
import { usePageMeta, type MetaTag } from "@/lib/page-meta";

const pageMeta: MetaTag[] = [
  { title: "Sign up / 註冊 — Flight Price Notifier" },
  { name: "description", content: "Create a Flight Price Notifier account and get emailed when fares drop below your budget." },
  { property: "og:title", content: "Sign up — Flight Price Notifier" },
  { property: "og:description", content: "Create an account and get fare-drop emails for flights from Taipei." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

export function SignUpPage() {
  usePageMeta(pageMeta);
  const navigate = useNavigate();
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/app", { replace: true });
    });
  }, [navigate]);

  async function handleSignUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) return error.message;
    if (data.session) {
      navigate("/app", { replace: true });
    } else {
      setPendingEmail(email);
    }
    return null;
  }

  return (
    <AuthCard
      title="建立帳號 / Create account"
      subtitle="設定航線與目標價，機票降價就通知你。"
      footer={
        <>
          已經有帳號？{" "}
          <Link to="/auth" className="font-medium text-primary-glow hover:underline">
            登入 / Sign in
          </Link>
        </>
      }
    >
      {pendingEmail ? (
        <div className="flex flex-col items-center gap-3 text-center">
          <MailCheck className="size-10 text-primary-glow" />
          <p className="font-medium">請到信箱確認 / Check your email</p>
          <p className="text-sm text-muted-foreground">確認連結已寄到 {pendingEmail}。</p>
        </div>
      ) : (
        <EmailPasswordForm submitLabel="Sign up / 註冊" passwordAutoComplete="new-password" onSubmit={handleSignUp} />
      )}
    </AuthCard>
  );
}
