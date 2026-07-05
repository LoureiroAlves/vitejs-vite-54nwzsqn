
import React, { useState, useEffect, useMemo, useRef } from "react";

// ---------- Ícones SVG simples (sem dependências externas) ----------
const IconPlus = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const IconTrash2 = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16ZM10 11v6M14 11v6" />
  </svg>
);
const IconChevronLeft = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const IconChevronRight = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const IconX = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const IconUsers = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconPrinter = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <path d="M6 14h12v8H6z" />
  </svg>
);
const IconFileSpreadsheet = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h8M11 13v8" />
  </svg>
);
const IconMail = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const IconEraser = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 20H7L3 16l10-10 7 7-2.5 2.5" />
    <path d="M6.0001 17.9999L10 14" />
  </svg>
);
const IconCopy = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const IconClipboard = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);
const IconBox = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconPlus2 = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const IconMinus = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
  </svg>
);
const IconHistory = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);
const IconAlertTriangle = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconDownload = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconUpload = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const IconUserCircle = ({ size = 16, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
  </svg>
);
// Gera cor e iniciais para avatar de cada colaborador
function getAvatar(name: string): { initials: string; bg: string; color: string } {
  const parts = name.replace(/\s*[-–]\s*RV\s*/i, "").trim().split(/\s+/);
  const initials = parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
  const palettes = [
    { bg: "#F0E8D5", color: "#9A6B1A" },
    { bg: "#E8EEF5", color: "#2E5A8A" },
    { bg: "#EDE8F5", color: "#5C4A8C" },
    { bg: "#E8F0E8", color: "#2E6B2E" },
    { bg: "#F5E8E8", color: "#8A2E2E" },
    { bg: "#E8F5F0", color: "#1A7A5E" },
    { bg: "#F5F0E8", color: "#7A5E1A" },
    { bg: "#EEE8F5", color: "#6A2E8A" },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % palettes.length;
  return { initials, ...palettes[Math.abs(hash) % palettes.length] };
}

// ---------- Tipos de turno / estado ----------
// Baseado na escala real: M/T/N (turnos), MT (turno duplo Manhã+Tarde),
// FO (folga semanal), FC (folga compensatória), FE (férias), FR (feriado),
// BM (baixa médica), EX (turno extra, horas definidas manualmente), FA (falta)
const SHIFT_TYPES: Record<string, { label: string; hours: number; color: string }> = {
  M: { label: "Manhã", hours: 8, color: "#E8B14A" },
  T: { label: "Tarde", hours: 8, color: "#5B8DBE" },
  N: { label: "Noite", hours: 8, color: "#5C4A8C" },
  MT: { label: "Manhã + Tarde", hours: 16, color: "#C97B3C" },
  FO: { label: "Folga", hours: 0, color: "#D9D4CC" },
  FC: { label: "Folga Compensatória", hours: 0, color: "#B8CCDB" },
  FE: { label: "Férias", hours: 0, color: "#6FA86F" },
  FR: { label: "Feriado", hours: 0, color: "#4AA3A8" },
  BM: { label: "Baixa Médica", hours: 0, color: "#B0556F" },
  EX: { label: "Extra", hours: 8, color: "#8C7BC2" },
  FA: { label: "Falta", hours: 0, color: "#C2554A" },
};

const SHIFT_ORDER = ["M", "T", "N", "MT", "FO", "FC", "FE", "FR", "BM", "EX", "FA"];

// Tipos com fundo claro — precisam de texto escuro para se lerem
const LIGHT_SHIFTS = ["FO", "FC"];

const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const WEEKDAY_LETTERS = ["D", "S", "T", "Q", "Q", "S", "S"];

// ---------- Equipas (a partir da escala enviada) ----------
const DEFAULT_RV_EMPLOYEES = ["Laurinda - RV", "Conceição Ferreira - RV", "Maria - RV"];

const DEFAULT_EMPLOYEES = [
  "Elisabete 83",
  "Fernanda 35",
  "Sofia 78",
  "Hilária Patrícia",
  "Nilda de Barros 55",
  "Rafaela",
  "Ivone 36",
  "Teresa 79",
  "Catarina Borges 72",
  "Djalice 48",
  "Paula Moura 92",
  "Amélia 87",
  "Filomena 45",
  "Catarina 47",
  "Fernando 82",
  "Ana Paula Carneiro 89",
];

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// ---------- Supabase ----------
const SUPABASE_URL = "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYnV2YnRkc2Zya3pyY3J3aWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NjIyMDQsImV4cCI6MjA5ODEzODIwNH0.lzaWuW_-aS7OQ9kzxOVw1msqFKkip85QeVRknE1tDMw";

const sbHeaders = {
  "Content-Type": "application/json",
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Prefer": "return=minimal",
};

async function loadFromSupabase(table: string): Promise<any> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.main`, {
      headers: { ...sbHeaders, "Prefer": "return=representation" },
    });
    if (!res.ok) return null;
    const rows = await res.json();
    return rows?.[0] ?? null;
  } catch (e) {
    return null;
  }
}

async function saveToSupabase(table: string, data: any): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: { ...sbHeaders, "Prefer": "resolution=merge-duplicates" },
    body: JSON.stringify({ id: "main", ...data, updated_at: new Date().toISOString() }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Supabase save failed (${res.status}): ${errText}`);
  }
}

// ---------- Supabase Storage para documentos de utentes ----------
async function uploadUtenteDoc(utenteId: string, file: File): Promise<string | null> {
  try {
    const path = `${utenteId}/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const contentType = file.type || (file.name.endsWith(".pdf") ? "application/pdf" : file.name.match(/\.(jpg|jpeg)$/i) ? "image/jpeg" : file.name.endsWith(".png") ? "image/png" : "application/octet-stream");
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/utentes-docs/${path}`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body: file,
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Upload falhou:", res.status, err);
      return null;
    }
    return `${SUPABASE_URL}/storage/v1/object/public/utentes-docs/${path}`;
  } catch (e) {
    console.error("uploadUtenteDoc erro:", e);
    return null;
  }
}

async function deleteUtenteDoc(url: string): Promise<void> {
  try {
    const path = url.split("/utentes-docs/")[1];
    if (!path) return;
    await fetch(`${SUPABASE_URL}/storage/v1/object/utentes-docs/${path}`, {
      method: "DELETE",
      headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` },
    });
  } catch (e) {}
}

// ---------- localStorage (fallback e cache local) ----------
const STORAGE_KEY = "turnos-app-data-v2";

function loadStoredData(): any {
  try {
    const raw = window.localStorage?.getItem?.(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveStoredData(data: any) {
  try {
    window.localStorage?.setItem?.(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
  // Proteção: nunca enviar um schedule vazio para o Supabase de forma silenciosa —
  // isto evita que um estado inicial vazio sobrescreva dados já guardados na nuvem.
  if (data.schedule && Object.keys(data.schedule).length === 0) {
    console.warn("saveStoredData: schedule vazio detectado — gravação ignorada para proteger dados existentes.");
    return;
  }
  // Guardar também no Supabase (sem bloquear)
  saveToSupabase("escala_data", {
    employees: data.employees,
    rv_employees: data.rvEmployees,
    schedule: data.schedule,
    extra_hours: data.extraHours,
    employee_emails: data.employeeEmails,
    employee_profiles: data.employeeProfiles,
    schedule_link: data.scheduleLink,
    last_published: data.lastPublished,
  }).catch(() => {});
}


// ---------- Avatar helper ----------

// ============================================================
// PÁGINA DE STOCK
// ============================================================
const STOCK_STORAGE_KEY = "turnos-stock-data-v1";

function loadStockData(): any {
  try {
    const raw = window.localStorage?.getItem?.(STOCK_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveStockData(data: any) {
  try {
    window.localStorage?.setItem?.(STOCK_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
  // Guardar também no Supabase
  saveToSupabase("stock_data", {
    products: data.products,
    movements: data.movements,
    custom_categories: data.customCategories,
  }).catch(() => {});
}

const STOCK_CATEGORIES = ["Alimentos", "Limpeza", "Higiene", "Escritório", "Outros"];

const STOCK_CATEGORY_COLORS: Record<string, string> = {
  "Alimentos": "#E8B14A",
  "Limpeza": "#5B8DBE",
  "Higiene": "#6FA86F",
  "Escritório": "#8C7BC2",
  "Outros": "#A39B8E",
};

const STOCK_CATEGORY_ICONS: Record<string, string> = {
  "Alimentos": "🍎",
  "Limpeza": "🧴",
  "Higiene": "🧼",
  "Escritório": "🖇️",
  "Outros": "📦",
};
const getCategoryIcon = (cat: string) => STOCK_CATEGORY_ICONS[cat] || "🏷️";

interface StockProduct {
  id: string;
  name: string;
  category: string;
  unit: string;
  quantity: number;
  minQuantity: number;
}

interface StockMovement {
  id: string;
  productId: string;
  productName: string;
  type: "entrada" | "saida";
  quantity: number;
  who: string;
  note: string;
  date: string;
}

function StockPage({ onBack }: { onBack: () => void }) {
  const [products, setProducts] = useState<StockProduct[]>(() => loadStockData()?.products ?? []);
  const [movements, setMovements] = useState<StockMovement[]>(() => loadStockData()?.movements ?? []);
  const [customCategories, setCustomCategories] = useState<string[]>(() => {
    const stored = loadStockData();
    return stored?.customCategories ?? stored?.custom_categories ?? [];
  });
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [activeTab, setActiveTab] = useState<"inventory" | "movement" | "history">("inventory");
  const [filterCategory, setFilterCategory] = useState<string>("Todos");
  const [stockSearch, setStockSearch] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [inlineMove, setInlineMove] = useState<{ id: string; type: "entrada" | "saida"; qty: string } | null>(null);
  const [showMoveModal, setShowMoveModal] = useState<StockProduct | null>(null);
  const [moveType, setMoveType] = useState<"entrada" | "saida">("entrada");
  const [moveQty, setMoveQty] = useState<number | string>("");
  const [moveWho, setMoveWho] = useState("");
  const [moveNote, setMoveNote] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "Alimentos", unit: "un", quantity: "", minQuantity: "" });
  const [tooltip2, setTooltip2] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    saveStockData({ products, movements, customCategories });
  }, [products, movements, customCategories]);

  const showTip2 = (e: React.MouseEvent, text: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip2({ text, x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };
  const hideTip2 = () => setTooltip2(null);

  const allCategories = [...STOCK_CATEGORIES, ...customCategories];

  // Calcular cor de cada categoria baseado no estado do stock
  const getCategoryColor = (cat: string): string | undefined => {
    const catProducts = products.filter((p) => p.category === cat);
    if (catProducts.length === 0) return undefined;
    const empty = catProducts.filter((p) => p.quantity <= 0).length;
    const low = catProducts.filter((p) => p.quantity > 0 && p.quantity <= p.minQuantity).length;
    const total = catProducts.length;
    const ratio = (empty + low * 0.5) / total;
    if (ratio === 0) return "#6FA86F"; // tudo OK — verde
    if (ratio <= 0.25) return "#8FBC5A"; // maioria OK — verde amarelado
    if (ratio <= 0.5) return "#E8B14A"; // metade em falta — amarelo
    if (ratio <= 0.75) return "#E07A3A"; // maioria em falta — laranja
    return "#C2554A"; // quase tudo em falta — vermelho
  };

  const addCategory = () => {
    const trimmed = newCategoryName.trim();
    if (!trimmed || allCategories.includes(trimmed)) return;
    setCustomCategories((prev) => [...prev, trimmed]);
    setNewCategoryName("");
    setShowAddCategory(false);
  };

  const removeCategory = (cat: string) => {
    if (products.some((p) => p.category === cat)) {
      alert(`Não é possível remover "${cat}" — existem produtos nesta categoria.`);
      return;
    }
    setCustomCategories((prev) => prev.filter((c) => c !== cat));
    if (filterCategory === cat) setFilterCategory("Todos");
  };

  const [faturas] = useState<{ nome: string; url: string; data: string; produtos: number }[]>(() => {
    try { return JSON.parse(window.localStorage?.getItem?.("turnos-faturas-v1") || "[]"); } catch { return []; }
  });
  const [photoImportResult, setPhotoImportResult] = useState<string | null>(null);
  const [showFaturas, setShowFaturas] = useState(false);

;
  const handleImportJSON = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          if (!data.produtos || !Array.isArray(data.produtos)) {
            alert("❌ Ficheiro JSON inválido. Certifique-se que foi gerado pelo Claude.");
            return;
          }
          let novos = 0;
          let entradas = 0;
          const nota = data.fatura ? `Fatura: ${data.fatura}` : "Importado via JSON";

          data.produtos.forEach((item: any) => {
            const nome = item.name || item.nome || "Produto desconhecido";
            const qty = Number(item.quantity || item.quantidade) || 1;
            const unit = item.unit || item.unidade || "un";
            const category = item.category || item.categoria || "Outros";
            const note = item.note || item.nota || nota;

            const existing = products.find((p) =>
              p.name.toLowerCase().includes(nome.toLowerCase()) ||
              nome.toLowerCase().includes(p.name.toLowerCase())
            );

            if (existing) {
              setProducts((prev) => prev.map((p) =>
                p.id === existing.id ? { ...p, quantity: p.quantity + qty } : p
              ));
              setMovements((prev) => [{
                id: Date.now().toString() + Math.random().toString(36).slice(2),
                productId: existing.id, productName: existing.name,
                type: "entrada" as const, quantity: qty, who: "Importação JSON", note, date: new Date().toISOString(),
              }, ...prev]);
              entradas++;
            } else {
              const novoProd: StockProduct = {
                id: Date.now().toString() + Math.random().toString(36).slice(2),
                name: nome, category, unit, quantity: qty, minQuantity: 1,
              };
              setProducts((prev) => [...prev, novoProd]);
              setMovements((prev) => [{
                id: Date.now().toString() + Math.random().toString(36).slice(2),
                productId: novoProd.id, productName: nome,
                type: "entrada" as const, quantity: qty, who: "Importação JSON", note, date: new Date().toISOString(),
              }, ...prev]);
              novos++;
            }
          });

          alert(`✅ ${novos} produto(s) criado(s) e ${entradas} entrada(s) registada(s)!`);
        } catch {
          alert("❌ Erro ao ler o ficheiro. Certifique-se que é um JSON válido.");
        }
      };
      reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  const addProduct = () => {
    if (!newProduct.name.trim()) return;
    const prod: StockProduct = {
      id: Date.now().toString(),
      name: newProduct.name.trim(),
      category: newProduct.category,
      unit: newProduct.unit || "un",
      quantity: Number(newProduct.quantity) || 0,
      minQuantity: Number(newProduct.minQuantity) || 0,
    };
    setProducts((prev) => [...prev, prod]);
    setNewProduct({ name: "", category: "Alimentos", unit: "un", quantity: "", minQuantity: "" });
    setShowAddProduct(false);
  };

  const removeProduct = (id: string) => {
    if (!window.confirm("Remover este produto? O histórico de movimentos é mantido.")) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const registerMove = () => {
    const qty = Number(moveQty);
    if (!showMoveModal || !qty || qty <= 0) return;
    const prod = showMoveModal;
    const newQty = moveType === "entrada"
      ? prod.quantity + qty
      : Math.max(0, prod.quantity - qty);

    setProducts((prev) => prev.map((p) => p.id === prod.id ? { ...p, quantity: newQty } : p));

    const mov: StockMovement = {
      id: Date.now().toString(),
      productId: prod.id,
      productName: prod.name,
      type: moveType,
      quantity: qty,
      who: moveWho.trim() || "Administrador",
      note: moveNote.trim(),
      date: new Date().toISOString(),
    };
    setMovements((prev) => [mov, ...prev]);
    setShowMoveModal(null);
    setMoveQty("");
    setMoveWho("");
    setMoveNote("");
  };

  const exportExcel = () => {
    const header = ["Produto", "Categoria", "Unidade", "Quantidade", "Mínimo", "Estado"];
    const rows = products.map((p) => [
      p.name, p.category, p.unit, p.quantity, p.minQuantity,
      p.quantity <= 0 ? "Sem stock" : p.quantity <= p.minQuantity ? "Stock baixo" : "OK"
    ]);
    const csvContent = "\uFEFF" + [header, ...rows].map((r) => r.join(";")).join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `inventario-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportPDF = () => {
    const rows = products.map((p) => {
      const state = p.quantity <= 0 ? "Sem stock" : p.quantity <= p.minQuantity ? "⚠️ Stock baixo" : "✓ OK";
      const color = p.quantity <= 0 ? "#C2554A" : p.quantity <= p.minQuantity ? "#E8B14A" : "#6FA86F";
      return `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.unit}</td><td style="text-align:center">${p.quantity}</td><td style="text-align:center">${p.minQuantity}</td><td style="color:${color};font-weight:600">${state}</td></tr>`;
    }).join("");
    const alerts = products.filter((p) => p.quantity <= p.minQuantity);
    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Inventário</title>
    <style>@page{size:A4;margin:15mm}body{font-family:Arial,sans-serif;color:#2A241C}h1{font-size:18px;margin:0 0 4px}p.sub{font-size:12px;color:#A39B8E;margin:0 0 16px}
    table{width:100%;border-collapse:collapse;font-size:11px}th{background:#2A241C;color:#fff;padding:8px;text-align:left}td{padding:7px 8px;border-bottom:1px solid #E4DED3}
    .alert-box{background:#FFF5F4;border:1px solid #F2C4BC;border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:12px;color:#9B3A2F}</style></head>
    <body><h1>Inventário de Stock</h1><p class="sub">Gerado em ${new Date().toLocaleDateString("pt-PT")}</p>
    ${alerts.length > 0 ? `<div class="alert-box">⚠️ ${alerts.length} produto(s) com stock baixo ou esgotado: ${alerts.map((p) => p.name).join(", ")}</div>` : ""}
    <table><thead><tr><th>Produto</th><th>Categoria</th><th>Unidade</th><th>Quantidade</th><th>Mínimo</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table></body></html>`;
    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.focus(); setTimeout(() => w.print(), 300);
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = filterCategory === "Todos" || p.category === filterCategory;
    const term = stockSearch.trim().toLowerCase();
    const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  const alerts = products.filter((p) => p.quantity <= p.minQuantity);
  const totalProducts = products.length;
  const outOfStock = products.filter((p) => p.quantity <= 0).length;

  return (
    <div style={stockStyles.page}>
      {tooltip2 && (
        <div style={{ position: "fixed" as const, left: tooltip2.x, top: tooltip2.y, transform: "translateX(-50%)", background: "#2A241C", color: "#FBF9F5", fontSize: 12, fontWeight: 500, padding: "5px 10px", borderRadius: 7, pointerEvents: "none" as const, zIndex: 9999, whiteSpace: "nowrap" as const, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>{tooltip2.text}</div>
      )}

      {/* Header */}
      <header style={stockStyles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onBack}
            style={{ ...stockStyles.toolBtn, gap: 6, padding: "7px 12px", display: "flex", alignItems: "center", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#6B6358" }}
            onMouseEnter={(e) => showTip2(e, "Voltar à escala de turnos")}
            onMouseLeave={hideTip2}
          >
            <IconChevronLeft size={16} /> Voltar
          </button>
          <div style={stockStyles.logoIcon}><IconBox size={20} color="#F5B944" /></div>
          <div>
            <div style={stockStyles.logoTitle}>Gestão de Stock</div>
            <div style={stockStyles.logoSub}>Inventário e movimentos</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {/* Botão importar JSON */}
          <button
            style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
            onClick={handleImportJSON}
            onMouseEnter={(e) => showTip2(e, "Importar fatura em JSON (gerado pelo Claude)")}
            onMouseLeave={hideTip2}
          >
            <IconDownload size={14} /> JSON
          </button>
          <div style={{ width: 1, height: 24, background: "#E4DED3" }} />
          {faturas.length > 0 && (
            <button
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: showFaturas ? "#2A241C" : "#F7F5F0", color: showFaturas ? "#F5B944" : "#6B6358", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
              onClick={() => setShowFaturas((v) => !v)}
              onMouseEnter={(e) => showTip2(e, `${faturas.length} fatura(s) arquivada(s)`)}
              onMouseLeave={hideTip2}
            >
              📋 {faturas.length}
            </button>
          )}
          <div style={{ width: 1, height: 24, background: "#E4DED3" }} />
          <button style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: "#6B6358" }}
            onClick={exportExcel} onMouseEnter={(e) => showTip2(e, "Exportar para Excel")} onMouseLeave={hideTip2}>
            <IconFileSpreadsheet size={16} />
          </button>
          <button style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: "#6B6358" }}
            onClick={exportPDF} onMouseEnter={(e) => showTip2(e, "Imprimir / Guardar PDF")} onMouseLeave={hideTip2}>
            <IconPrinter size={16} />
          </button>
        </div>
      </header>

      {/* Resultado da importação por foto */}
      {photoImportResult && (
        <div style={{ maxWidth: 1300, margin: "0 auto 16px", background: photoImportResult.startsWith("✅") ? "#E8F5E9" : "#FFF5F4", border: `1px solid ${photoImportResult.startsWith("✅") ? "#A5D6A7" : "#F2C4BC"}`, borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 500, color: photoImportResult.startsWith("✅") ? "#2E7D32" : "#9B3A2F", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{photoImportResult}</span>
          <button onClick={() => setPhotoImportResult(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 16, color: "#A39B8E" }}>✕</button>
        </div>
      )}

      {/* Summary cards */}
      <div className="summary-grid-mobile" style={stockStyles.summaryGrid}>
        <div style={stockStyles.card}>
          <div style={stockStyles.cardLabel}>Produtos</div>
          <div style={stockStyles.cardValue}>{totalProducts}</div>
          <div style={stockStyles.cardSub}>em inventário</div>
        </div>
        <div style={{ ...stockStyles.card, ...(alerts.length > 0 ? stockStyles.cardWarn : {}) }}>
          <div style={stockStyles.cardLabel}>Alertas</div>
          <div style={{ ...stockStyles.cardValue, color: alerts.length > 0 ? "#C2554A" : undefined }}>{alerts.length}</div>
          <div style={stockStyles.cardSub}>{alerts.length === 0 ? "stock em ordem" : "stock baixo / esgotado"}</div>
        </div>
        <div style={{ ...stockStyles.card, ...(outOfStock > 0 ? stockStyles.cardWarn : {}) }}>
          <div style={stockStyles.cardLabel}>Esgotados</div>
          <div style={{ ...stockStyles.cardValue, color: outOfStock > 0 ? "#C2554A" : undefined }}>{outOfStock}</div>
          <div style={stockStyles.cardSub}>produtos sem stock</div>
        </div>
        <div style={stockStyles.card}>
          <div style={stockStyles.cardLabel}>Movimentos</div>
          <div style={stockStyles.cardValue}>{movements.length}</div>
          <div style={stockStyles.cardSub}>registados</div>
        </div>
      </div>

      {/* Alertas */}
      {alerts.length > 0 && (
        <div style={stockStyles.alertBox}>
          <IconAlertTriangle size={18} color="#9B3A2F" />
          <div>
            <strong style={{ fontSize: 14, color: "#9B3A2F" }}>
              {alerts.length} produto(s) com stock baixo ou esgotado
            </strong>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: 8 }}>
              {alerts.map((p) => (
                <span key={p.id} style={{ background: "#FDDDD9", color: "#7A2E24", borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 600 }}>
                  {p.name} ({p.quantity} {p.unit})
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Painel de faturas arquivadas */}
      {showFaturas && faturas.length > 0 && (
        <div style={{ maxWidth: 1300, margin: "0 auto 20px", background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #EFEAE2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14 }}>📋 Arquivo de Faturas</span>
            <button onClick={() => setShowFaturas(false)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#A39B8E", fontSize: 16 }}>✕</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {faturas.map((f, idx) => {
              const d = new Date(f.data);
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderBottom: "1px solid #EFEAE2" }}>
                  <span style={{ fontSize: 20 }}>🧾</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#2A241C" }}>{f.nome}</div>
                    <div style={{ fontSize: 11, color: "#A39B8E" }}>
                      {d.toLocaleDateString("pt-PT")} às {d.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })} · {f.produtos} produto(s)
                    </div>
                  </div>
                  {f.url && (
                    <a href={f.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 600, color: "#5B8DBE", textDecoration: "none" }}>
                      <IconDownload size={13} /> Ver
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tabs + pesquisa */}
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" as const, gap: 12, maxWidth: 1300, margin: "0 auto 20px" }}>
        <div style={{ ...stockStyles.tabs, margin: 0 }}>
          {[
            { key: "inventory", label: "Inventário", icon: <IconBox size={14} /> },
            { key: "history", label: "Histórico", icon: <IconHistory size={14} /> },
          ].map((tab) => (
            <button
              key={tab.key}
              style={{ ...stockStyles.tab, ...(activeTab === tab.key ? stockStyles.tabActive : {}) }}
              onClick={() => setActiveTab(tab.key as any)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div style={{ position: "relative" as const, width: 220 }}>
          <input
            value={stockSearch}
            onChange={(e) => setStockSearch(e.target.value)}
            placeholder="🔍 Pesquisar..."
            style={{ width: "100%", boxSizing: "border-box" as const, border: "1px solid #E4DED3", borderRadius: 999, padding: "7px 30px 7px 14px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const }}
          />
          {stockSearch && (
            <button
              onClick={() => setStockSearch("")}
              style={{ position: "absolute" as const, right: 8, top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent", cursor: "pointer", color: "#A39B8E", fontSize: 13, padding: 4 }}
              title="Limpar pesquisa"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Inventário */}
      {activeTab === "inventory" && (
        <div>
          {/* Filtro por categoria + botão adicionar */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" as const, alignItems: "center", maxWidth: 1300, margin: "0 auto 16px" }}>
            {["Todos", ...allCategories].map((cat) => {
              const catColor = cat !== "Todos" ? getCategoryColor(cat) : undefined;
              const isActive = filterCategory === cat;
              return (
              <div key={cat} style={{ position: "relative" as const, display: "inline-flex", alignItems: "center" }}>
                <button
                  className="stock-filter-btn"
                  style={{
                    ...stockStyles.filterBtn,
                    background: isActive ? "#2A241C" : catColor ? catColor + "22" : undefined,
                    color: isActive ? "#FBF9F5" : catColor ? catColor : undefined,
                    borderColor: isActive ? "#2A241C" : catColor ?? undefined,
                    fontWeight: catColor ? 600 : undefined,
                    paddingRight: customCategories.includes(cat) ? 24 : undefined,
                  }}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat !== "Todos" && <span style={{ marginRight: 5 }}>{getCategoryIcon(cat)}</span>}
                  {cat}
                  {catColor && cat !== "Todos" && !isActive && (
                    <span style={{ marginLeft: 5, fontSize: 9, background: catColor, color: "#fff", borderRadius: 4, padding: "1px 4px", fontWeight: 700 }}>
                      {products.filter((p) => p.category === cat && (p.quantity <= 0 || p.quantity <= p.minQuantity)).length > 0
                        ? `${products.filter((p) => p.category === cat && (p.quantity <= 0 || p.quantity <= p.minQuantity)).length} ⚠`
                        : "✓"}
                    </span>
                  )}
                </button>
                {customCategories.includes(cat) && (
                  <button
                    onClick={() => removeCategory(cat)}
                    style={{ position: "absolute" as const, right: 4, top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent", cursor: "pointer", color: isActive ? "#FBF9F5" : "#C2BAAC", padding: 1, lineHeight: 1, fontSize: 12 }}
                    title={`Remover categoria "${cat}"`}
                  >
                    ×
                  </button>
                )}
              </div>
            );})}

            {/* Adicionar nova categoria */}
            {showAddCategory ? (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input
                  autoFocus
                  style={{ ...stockStyles.input, width: 160, padding: "6px 10px", fontSize: 13 }}
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") addCategory(); if (e.key === "Escape") { setShowAddCategory(false); setNewCategoryName(""); } }}
                  placeholder="Nome do serviço"
                />
                <button
                  style={{ ...stockStyles.addBtn, padding: "6px 10px" }}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={addCategory}
                >
                  OK
                </button>
                <button
                  style={{ ...stockStyles.cancelBtn, padding: "6px 10px" }}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => { setShowAddCategory(false); setNewCategoryName(""); }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <button style={{ ...stockStyles.filterBtn, borderStyle: "dashed", color: "#A39B8E" }} onClick={() => setShowAddCategory(true)}>
                + Serviço
              </button>
            )}

            <button style={{ ...stockStyles.addBtn, marginLeft: "auto" }} onClick={() => setShowAddProduct(true)}>
              <IconPlus2 size={14} /> Adicionar produto
            </button>
          </div>

          {/* Formulário de adicionar produto */}
          {showAddProduct && (
            <div style={stockStyles.formCard}>
              <div style={stockStyles.formGrid}>
                <div>
                  <label style={stockStyles.label}>Nome do produto *</label>
                  <input style={stockStyles.input} value={newProduct.name} onChange={(e) => setNewProduct((p) => ({ ...p, name: e.target.value }))} placeholder="Ex: Detergente roupa" autoFocus />
                </div>
                <div>
                  <label style={stockStyles.label}>Categoria</label>
                  <select style={stockStyles.select} value={newProduct.category} onChange={(e) => setNewProduct((p) => ({ ...p, category: e.target.value }))}>
                    {allCategories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={stockStyles.label}>Unidade</label>
                  <input style={stockStyles.input} value={newProduct.unit} onChange={(e) => setNewProduct((p) => ({ ...p, unit: e.target.value }))} placeholder="Ex: kg, un, L" />
                </div>
                <div>
                  <label style={stockStyles.label}>Quantidade inicial</label>
                  <input style={stockStyles.input} type="number" min="0" placeholder="0" value={newProduct.quantity} onChange={(e) => setNewProduct((p) => ({ ...p, quantity: e.target.value }))} />
                </div>
                <div>
                  <label style={stockStyles.label}>Mínimo (alerta abaixo de)</label>
                  <input style={stockStyles.input} type="number" min="0" placeholder="1" value={newProduct.minQuantity} onChange={(e) => setNewProduct((p) => ({ ...p, minQuantity: e.target.value }))} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button style={stockStyles.addBtn} onClick={addProduct}>Guardar</button>
                <button style={stockStyles.cancelBtn} onClick={() => setShowAddProduct(false)}>Cancelar</button>
              </div>
            </div>
          )}

          {/* Lista de produtos */}
          {filteredProducts.length === 0 ? (
            <div style={stockStyles.empty}>
              {stockSearch.trim()
                ? <>Nenhum produto encontrado para "{stockSearch}".</>
                : <>Nenhum produto {filterCategory !== "Todos" ? `na categoria "${filterCategory}"` : "em inventário"}.<br />Clique em "Adicionar produto" para começar.</>
              }
            </div>
          ) : (
            <div className="stock-grid" style={stockStyles.productGrid}>
              {filteredProducts.map((prod) => {
                const isLow = prod.quantity > 0 && prod.quantity <= prod.minQuantity;
                const isEmpty = prod.quantity <= 0;
                const catColor = STOCK_CATEGORY_COLORS[prod.category] || "#A39B8E";
                return (
                  <div key={prod.id} className="stock-card" style={{ ...stockStyles.productCard, ...(isEmpty ? stockStyles.productCardEmpty : isLow ? stockStyles.productCardLow : {}) }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      {editingProduct === prod.id ? (
                        <select
                          value={prod.category}
                          onChange={(e) => setProducts((prev) => prev.map((p) => p.id === prod.id ? { ...p, category: e.target.value } : p))}
                          onKeyDown={(e) => { if (e.key === "Enter") setEditingProduct(null); }}
                          style={{ fontSize: 11, border: "1px solid #E4DED3", borderRadius: 6, padding: "2px 6px", background: "#FAFAF8", fontFamily: "'Inter', sans-serif", color: "#2A241C" }}
                        >
                          {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      ) : (
                        <span style={{ ...stockStyles.categoryBadge, background: catColor + "22", color: catColor }}>{getCategoryIcon(prod.category)} {prod.category}</span>
                      )}
                      <div style={{ display: "flex", gap: 4 }}>
                        <button
                          style={{ border: "none", background: editingProduct === prod.id ? "#2A241C" : "transparent", borderRadius: 6, padding: "3px 6px", cursor: "pointer", color: editingProduct === prod.id ? "#F5B944" : "#A39B8E" }}
                          onClick={() => setEditingProduct(editingProduct === prod.id ? null : prod.id)}
                          title={editingProduct === prod.id ? "Fechar edição" : "Editar produto"}
                        >
                          {editingProduct === prod.id ? "✓" : "✏️"}
                        </button>
                        <button style={stockStyles.deleteBtn2} onClick={() => removeProduct(prod.id)} title="Remover produto">
                          <IconTrash2 size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Nome editável */}
                    {editingProduct === prod.id ? (
                      <input
                        value={prod.name}
                        onChange={(e) => setProducts((prev) => prev.map((p) => p.id === prod.id ? { ...p, name: e.target.value } : p))}
                        onKeyDown={(e) => { if (e.key === "Enter") setEditingProduct(null); }}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "6px 8px", fontSize: 14, fontWeight: 600, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 8 }}
                        autoFocus
                      />
                    ) : (
                      <div style={stockStyles.productName}>{prod.name}</div>
                    )}

                    <div style={stockStyles.productQty}>
                      <span style={{ fontSize: 28, fontWeight: 700, color: isEmpty ? "#C2554A" : isLow ? "#E8A020" : "#2A241C", fontFamily: "'Space Grotesk', sans-serif" }}>
                        {prod.quantity}
                      </span>
                      {/* Unidade editável */}
                      {editingProduct === prod.id ? (
                        <input
                          value={prod.unit}
                          onChange={(e) => setProducts((prev) => prev.map((p) => p.id === prod.id ? { ...p, unit: e.target.value } : p))}
                          onKeyDown={(e) => { if (e.key === "Enter") setEditingProduct(null); }}
                          style={{ width: 50, border: "1px solid #E4DED3", borderRadius: 6, padding: "3px 6px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#A39B8E", marginLeft: 4 }}
                        />
                      ) : (
                        <span style={{ fontSize: 13, color: "#A39B8E", marginLeft: 4 }}>{prod.unit}</span>
                      )}
                    </div>

                    {/* Barra de progresso: quantidade vs. mínimo */}
                    <div style={{ height: 6, borderRadius: 999, background: "#EFEAE2", overflow: "hidden", margin: "8px 0 10px" }}>
                      <div style={{
                        height: "100%",
                        width: `${prod.minQuantity > 0 ? Math.min((prod.quantity / (prod.minQuantity * 2)) * 100, 100) : (prod.quantity > 0 ? 100 : 0)}%`,
                        background: isEmpty ? "#C2554A" : isLow ? "#E8B14A" : "#6FA86F",
                        borderRadius: 999,
                        transition: "width 0.3s ease",
                      }} />
                    </div>

                    {/* Mínimo editável */}
                    {editingProduct === prod.id ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                        <span style={{ fontSize: 11, color: "#A39B8E" }}>mín.</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={prod.minQuantity === 0 ? "" : prod.minQuantity}
                          onChange={(e) => setProducts((prev) => prev.map((p) => p.id === prod.id ? { ...p, minQuantity: e.target.value === "" ? 0 : Number(e.target.value) } : p))}
                          onKeyDown={(e) => { if (e.key === "Enter") setEditingProduct(null); }}
                          style={{ width: 60, border: "1px solid #E4DED3", borderRadius: 6, padding: "3px 6px", fontSize: 11, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#A39B8E" }}
                        />
                        <span style={{ fontSize: 11, color: "#A39B8E" }}>{prod.unit}</span>
                      </div>
                    ) : (
                      <div style={{ fontSize: 11, color: "#A39B8E", marginBottom: 12 }}>mín. {prod.minQuantity} {prod.unit}</div>
                    )}

                    {(isLow || isEmpty) && (
                      <div style={{ ...stockStyles.stockBadge, background: isEmpty ? "#C2554A" : "#E8B14A", color: "#fff" }}>
                        {isEmpty ? "Esgotado" : "Stock baixo"}
                      </div>
                    )}
                    {/* Entrada / Saída inline */}
                    {inlineMove?.id === prod.id ? (
                      <div style={{ marginTop: 10 }}>
                        <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                          <button
                            style={{ flex: 1, padding: "5px 0", borderRadius: 7, border: "2px solid", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", background: inlineMove.type === "entrada" ? "#E8F0E8" : "#FFFFFF", color: "#3B6D11", borderColor: inlineMove.type === "entrada" ? "#3B6D11" : "#E4DED3" }}
                            onClick={() => setInlineMove({ ...inlineMove, type: "entrada" })}
                          >+ Entrada</button>
                          <button
                            style={{ flex: 1, padding: "5px 0", borderRadius: 7, border: "2px solid", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", background: inlineMove.type === "saida" ? "#FFF0EE" : "#FFFFFF", color: "#C2554A", borderColor: inlineMove.type === "saida" ? "#C2554A" : "#E4DED3" }}
                            onClick={() => setInlineMove({ ...inlineMove, type: "saida" })}
                          >- Saída</button>
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                          <input
                            autoFocus
                            type="number"
                            min="0"
                            placeholder="Qtd."
                            value={inlineMove.qty}
                            onChange={(e) => setInlineMove({ ...inlineMove, qty: e.target.value })}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                const qty = Number(inlineMove.qty);
                                if (!qty) return;
                                setProducts((prev) => prev.map((p) => p.id === prod.id
                                  ? { ...p, quantity: inlineMove.type === "entrada" ? p.quantity + qty : Math.max(0, p.quantity - qty) }
                                  : p
                                ));
                                setMovements((prev) => [{ id: Date.now().toString() + Math.random().toString(36).slice(2), productId: prod.id, productName: prod.name, type: inlineMove.type, quantity: qty, who: "Manual", note: "", date: new Date().toISOString() }, ...prev]);
                                setInlineMove(null);
                              }
                              if (e.key === "Escape") setInlineMove(null);
                            }}
                            style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 7, padding: "6px 8px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", colorScheme: "light" as const }}
                          />
                          <button
                            style={{ background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 7, padding: "6px 12px", cursor: "pointer", fontSize: 13, fontWeight: 700 }}
                            onClick={() => {
                              const qty = Number(inlineMove.qty);
                              if (!qty) return;
                              setProducts((prev) => prev.map((p) => p.id === prod.id
                                ? { ...p, quantity: inlineMove.type === "entrada" ? p.quantity + qty : Math.max(0, p.quantity - qty) }
                                : p
                              ));
                              setMovements((prev) => [{ id: Date.now().toString() + Math.random().toString(36).slice(2), productId: prod.id, productName: prod.name, type: inlineMove.type, quantity: qty, who: "Manual", note: "", date: new Date().toISOString() }, ...prev]);
                              setInlineMove(null);
                            }}
                          >✓</button>
                          <button
                            style={{ background: "transparent", color: "#A39B8E", border: "1px solid #E4DED3", borderRadius: 7, padding: "6px 10px", cursor: "pointer", fontSize: 13 }}
                            onClick={() => setInlineMove(null)}
                          >✕</button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                        <button style={{ ...stockStyles.moveBtn, flex: 1 }} onClick={() => setInlineMove({ id: prod.id, type: "entrada", qty: "" })}>
                          <IconPlus2 size={13} /> Entrada
                        </button>
                        <button style={{ ...stockStyles.moveBtn, ...stockStyles.moveBtnOut, flex: 1 }} onClick={() => setInlineMove({ id: prod.id, type: "saida", qty: "" })}>
                          <IconMinus size={13} /> Saída
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Histórico */}
      {activeTab === "history" && (
        <div>
          {movements.length === 0 ? (
            <div style={stockStyles.empty}>Nenhum movimento registado ainda.</div>
          ) : (
            <div style={stockStyles.historyList}>
              {movements.map((m) => {
                const date = new Date(m.date);
                const dateStr = date.toLocaleDateString("pt-PT");
                const timeStr = date.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
                return (
                  <div key={m.id} style={stockStyles.historyItem}>
                    <div style={{ ...stockStyles.moveTypeIcon, background: m.type === "entrada" ? "#E8F0E8" : "#FFF0EE", color: m.type === "entrada" ? "#3B6D11" : "#C2554A" }}>
                      {m.type === "entrada" ? <IconPlus2 size={14} /> : <IconMinus size={14} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{m.productName}</div>
                      <div style={{ fontSize: 12, color: "#6B6358", marginTop: 2 }}>
                        {m.type === "entrada" ? "Entrada" : "Saída"} de <strong>{m.quantity}</strong> unidade(s) — por {m.who}
                        {m.note && <span style={{ color: "#A39B8E" }}> · {m.note}</span>}
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: "#A39B8E", textAlign: "right" as const, flexShrink: 0 }}>
                      <div>{dateStr}</div>
                      <div>{timeStr}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Modal de movimento */}
      {showMoveModal && (
        <div style={stockStyles.overlay} onClick={() => setShowMoveModal(null)}>
          <div style={stockStyles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={stockStyles.closeBtn} onClick={() => setShowMoveModal(null)}><IconX size={18} /></button>
            <h3 style={stockStyles.modalTitle}>{moveType === "entrada" ? "Registar entrada" : "Registar saída"}</h3>
            <p style={{ fontSize: 14, color: "#6B6358", marginBottom: 16 }}>
              <strong>{showMoveModal.name}</strong> — stock atual: {showMoveModal.quantity} {showMoveModal.unit}
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <button style={{ ...stockStyles.toggleBtn, ...(moveType === "entrada" ? stockStyles.toggleBtnActive : {}) }} onClick={() => setMoveType("entrada")}>
                <IconPlus2 size={14} /> Entrada
              </button>
              <button style={{ ...stockStyles.toggleBtn, ...(moveType === "saida" ? { ...stockStyles.toggleBtnActive, background: "#C2554A" } : {}) }} onClick={() => setMoveType("saida")}>
                <IconMinus size={14} /> Saída
              </button>
            </div>
            <label style={stockStyles.label}>Quantidade ({showMoveModal.unit})</label>
            <input style={{ ...stockStyles.input, marginBottom: 12 }} type="number" min="0" placeholder="Quantidade" value={moveQty} onChange={(e) => setMoveQty(e.target.value)} autoFocus />
            <label style={stockStyles.label}>Quem registou</label>
            <input style={{ ...stockStyles.input, marginBottom: 12 }} value={moveWho} onChange={(e) => setMoveWho(e.target.value)} placeholder="Nome (opcional)" />
            <label style={stockStyles.label}>Nota</label>
            <input style={{ ...stockStyles.input, marginBottom: 16 }} value={moveNote} onChange={(e) => setMoveNote(e.target.value)} placeholder="Observação (opcional)" />
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button style={stockStyles.cancelBtn} onClick={() => setShowMoveModal(null)}>Cancelar</button>
              <button style={{ ...stockStyles.addBtn, background: moveType === "entrada" ? "#2A241C" : "#C2554A" }} onClick={registerMove}>
                Registar {moveType === "entrada" ? "entrada" : "saída"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const stockStyles: { [key: string]: React.CSSProperties } = {
  page: { fontFamily: "'Inter', sans-serif", background: "#E8F0E8", minHeight: "100vh", padding: "32px 24px 60px", color: "#2A241C", animation: "pageOpen 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1300, margin: "0 auto 20px", flexWrap: "wrap", gap: 12 },
  logoIcon: { width: 40, height: 40, borderRadius: 12, background: "#1A1612", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  logoTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#2A241C" },
  logoSub: { fontSize: 12, color: "#A39B8E" },
  toolBtn: { border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: "#6B6358" },
  summaryGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 1300, margin: "0 auto 20px" },
  card: { background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14, padding: "16px 18px" },
  cardWarn: { background: "#FFF5F4", border: "1px solid #F2C4BC" },
  cardLabel: { fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 6 },
  cardValue: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: "#2A241C", lineHeight: 1 },
  cardSub: { fontSize: 12, color: "#A39B8E", marginTop: 4 },
  alertBox: { maxWidth: 1300, margin: "0 auto 20px", background: "#FFF5F4", border: "1px solid #F2C4BC", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12 },
  tabs: { display: "flex", gap: 4, maxWidth: 1300, margin: "0 auto 20px", background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 10, padding: 4, width: "fit-content" },
  tab: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "transparent", borderRadius: 7, padding: "7px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" },
  tabActive: { background: "#2A241C", color: "#FBF9F5" },
  filterBtn: { border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 999, padding: "7px 14px", fontSize: 13, cursor: "pointer", fontFamily: "'Inter', sans-serif", color: "#6B6358", fontWeight: 500, transition: "transform 0.1s ease, box-shadow 0.15s ease" },
  addBtn: { display: "inline-flex", alignItems: "center", gap: 6, background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" },
  cancelBtn: { background: "transparent", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" },
  formCard: { maxWidth: 1300, margin: "0 auto 20px", background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14, padding: "20px" },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 },
  label: { display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 },
  input: { width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const },
  select: { width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C" },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, maxWidth: 1300, margin: "0 auto" },
  productCard: { background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14, padding: "16px" },
  productCardLow: { border: "1.5px solid #E8B14A", background: "#FFFBF0" },
  productCardEmpty: { border: "1.5px solid #F2C4BC", background: "#FFF5F4" },
  productName: { fontWeight: 600, fontSize: 15, marginBottom: 6 },
  productQty: { display: "flex", alignItems: "baseline", gap: 2, marginBottom: 2 },
  categoryBadge: { fontSize: 11, fontWeight: 600, borderRadius: 6, padding: "2px 7px", letterSpacing: "0.03em" },
  stockBadge: { fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "3px 8px", display: "inline-block", marginBottom: 4 },
  deleteBtn2: { border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", padding: 2, borderRadius: 4, display: "flex", alignItems: "center" },
  moveBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 5, border: "1px solid #E4DED3", background: "#F7F5F0", borderRadius: 7, padding: "6px 8px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", color: "#2A241C" },
  moveBtnOut: { background: "#FFF0EE", borderColor: "#F2C4BC", color: "#C2554A" },
  historyList: { maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 8 },
  historyItem: { background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 },
  moveTypeIcon: { width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  empty: { textAlign: "center" as const, color: "#A39B8E", fontSize: 14, padding: "40px 20px", background: "#FFFFFF", borderRadius: 14, border: "1px solid #E4DED3", maxWidth: 1300, margin: "0 auto" },
  overlay: { position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 16 },
  modal: { background: "#FFFFFF", borderRadius: 16, padding: 24, maxWidth: 400, width: "100%", position: "relative" as const, boxShadow: "0 12px 40px rgba(42,36,28,0.18)" },
  closeBtn: { position: "absolute" as const, top: 14, right: 14, border: "none", background: "transparent", cursor: "pointer", color: "#A39B8E", padding: 4 },
  modalTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, margin: "0 0 8px" },
  toggleBtn: { display: "flex", alignItems: "center", gap: 6, border: "1px solid #E4DED3", background: "#F7F5F0", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", color: "#2A241C" },
  toggleBtnActive: { background: "#2A241C", color: "#FBF9F5", borderColor: "#2A241C" },
};

// ============================================================

// ============================================================
// PÁGINA DE UTENTES
// ============================================================
const UTENTES_STORAGE_KEY = "turnos-utentes-data-v1";

function loadUtentesData(): any {
  try {
    const raw = window.localStorage?.getItem?.(UTENTES_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveUtentesData(data: any) {
  try {
    window.localStorage?.setItem?.(UTENTES_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
  saveToSupabase("utentes_data", data).catch(() => {});
}

interface Utente {
  id: string;
  name: string;
  birthDate?: string;
  familyContact?: string;
  familyPhone?: string;
  room?: string;
  entryDate?: string;
  notes?: string;
  photo?: string;
  familyCode?: string;
  dailyLogs?: { date: string; text: string; author?: string; attachments?: { name: string; url: string; type: string }[]; photos?: { url: string; uploadedAt: string }[] }[];
  files?: { name: string; type: string; data: string; url?: string; uploadedAt: string }[];
  // Dados do Cartão de Cidadão
  ccNumber?: string;
  ccValidity?: string;
  nif?: string;
  naturalidade?: string;
  morada?: string;
  nacionalidade?: string;
  estadoCivil?: string;
  // Dia a dia
  medications?: { id: string; name: string; dose: string; schedule: string }[];
  medicationNotes?: string;
  hygieneNotes?: string;
  feedingNotes?: string;
  otherNotes?: string;
  // Plano Individual de Cuidados (campos extra preenchidos manualmente)
  picData?: Record<string, string>;
  // Anexos por aba
  attachmentsMed?: { name: string; url: string; type: string }[];
  attachmentsCuidados?: { name: string; url: string; type: string }[];
  attachmentsRegisto?: { name: string; url: string; type: string }[];
  // Documentos para a família (visíveis no portal familiar)
  filesFamily?: { name: string; type: string; url: string; uploadedAt: string }[];
}

function UtentesPage({ onBack, onGerarERPI }: { onBack: () => void; onGerarERPI: () => void }) {
  const [utentes, setUtentes] = useState<Utente[]>(() => loadUtentesData()?.utentes ?? []);
  const [openUtente, setOpenUtente] = useState<Utente | null>(null);
  const [utenteTab, setUtenteTab] = useState<"geral" | "registo" | "medicacao" | "cuidados" | "pic">("geral");
  const [importResult, setImportResult] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    saveUtentesData({ utentes });
  }, [utentes]);

  const showTip = (e: React.MouseEvent, text: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ text, x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };
  const hideTip = () => setTooltip(null);

  const exportExcelUtentes = () => {
    const header = ["Nome", "Data Nasc.", "Quarto", "Data Entrada", "Contacto Familiar", "Telefone Familiar", "Observações", "Documentos"];
    const rows = utentes.map((u) => [
      u.name, u.birthDate || "", u.room || "", u.entryDate || "",
      u.familyContact || "", u.familyPhone || "", (u.dailyLogs?.[0]?.text || ""),
      (u.files?.length ?? 0) + " ficheiro(s)"
    ]);
    const csv = "\uFEFF" + [header, ...rows].map((r) => r.map((v) => `"${v}"`).join(";")).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `utentes-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportPDFUtentes = () => {
    const rows = utentes.map((u) => `
      <tr>
        <td>${u.name}</td><td>${u.birthDate || "—"}</td><td>${u.room || "—"}</td>
        <td>${u.entryDate || "—"}</td>
        <td>${u.familyContact || "—"}${u.familyPhone ? ` / ${u.familyPhone}` : ""}</td>
        <td>${u.dailyLogs?.[0]?.text || "—"}</td><td style="text-align:center">${u.files?.length ?? 0}</td>
      </tr>`).join("");
    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Lista de Utentes</title>
    <style>@page{size:A4 landscape;margin:12mm}body{font-family:Arial,sans-serif;font-size:11px}
    h1{font-size:16px;margin:0 0 4px}p{font-size:11px;color:#888;margin:0 0 12px}
    table{width:100%;border-collapse:collapse}th{background:#2A241C;color:#fff;padding:7px 8px;text-align:left;font-size:10px}
    td{padding:6px 8px;border-bottom:1px solid #E4DED3;font-size:10px}tr:nth-child(even){background:#FAFAF8}
    </style></head><body>
    <h1>Lista de Utentes</h1><p>${new Date().toLocaleDateString("pt-PT")} — ${utentes.length} utente(s)</p>
    <table><thead><tr><th>Nome</th><th>Data Nasc.</th><th>Quarto</th><th>Data Entrada</th><th>Contacto Familiar</th><th>Observações</th><th>Docs</th></tr></thead>
    <tbody>${rows}</tbody></table></body></html>`;
    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.focus(); setTimeout(() => w.print(), 300);
  };

  const handleImportUtenteJSON = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          const lista = Array.isArray(data) ? data : data.utentes;
          if (!lista || !Array.isArray(lista)) {
            alert("❌ Ficheiro JSON inválido. Certifique-se que foi gerado pelo Claude.");
            return;
          }
          const novos: Utente[] = lista.map((u: any) => {
            const initialNote = u.notes || u.observacoes;
            return {
              id: Date.now().toString() + Math.random().toString(36).slice(2),
              name: u.name || u.nome || "Nome desconhecido",
              birthDate: u.birthDate || u.dataNascimento || undefined,
              room: u.room || u.quarto || undefined,
              entryDate: u.entryDate || u.dataEntrada || undefined,
              familyContact: u.familyContact || u.contactoFamiliar || undefined,
              familyPhone: u.familyPhone || u.telefoneFamiliar || undefined,
              dailyLogs: initialNote ? [{ date: new Date().toLocaleDateString("pt-PT"), text: initialNote }] : undefined,
            };
          });
          setUtentes((prev) => [...prev, ...novos]);
          alert(`✅ ${novos.length} utente(s) importado(s) com sucesso!`);
        } catch {
          alert("❌ Erro ao ler o ficheiro. Certifique-se que é um JSON válido.");
        }
      };
      reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  const addUtente = () => {
    const trimmed = newName.trim();
    if (!trimmed) return;
    const utente: Utente = { id: Date.now().toString(), name: trimmed };
    setUtentes((prev) => [...prev, utente]);
    setNewName("");
    setShowAdd(false);
  };

  const removeUtente = (id: string) => {
    if (!window.confirm("Remover este utente e todos os seus dados?")) return;
    setUtentes((prev) => prev.filter((u) => u.id !== id));
    if (openUtente?.id === id) setOpenUtente(null);
  };






  const updateUtente = (id: string, updates: Partial<Utente>) => {
    setUtentes((prev) => prev.map((u) => u.id === id ? { ...u, ...updates } : u));
    if (openUtente?.id === id) setOpenUtente((prev) => prev ? { ...prev, ...updates } : prev);
  };

  const generateFamilyCode = () => {
    return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
  };

  const [familyLinkModal, setFamilyLinkModal] = useState<{ name: string; link: string } | null>(null);

  const handleGeneratePIC = async (u: Utente) => {
    const hoje = new Date().toLocaleDateString("pt-PT");
    const dataRevisao = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString("pt-PT");
    const meds = (u.medications || []).map((m) => `${m.name}${m.dose ? " — " + m.dose : ""}${m.schedule ? " (" + m.schedule + ")" : ""}`).join("\n") || u.medicationNotes || "";

    // Carregar dados guardados anteriormente do PIC
    const picData = u.picData || {};
    const aiTexts: Record<string, string> = {}; // IA desactivada temporariamente

    const campo = (label: string, valor: string, linhas = 1, key = "") => {
      const minH = linhas === 1 ? "20px" : `${linhas * 20}px`;
      // Se tiver dados guardados anteriormente para este campo, usa-os
      const savedValue = key && picData[key] ? picData[key] : valor;
      return `<div style="margin-bottom:5px">
        <div style="font-size:6.5pt;font-weight:bold;color:#555;text-transform:uppercase;letter-spacing:.5px;margin-bottom:1px">${label}</div>
        <div contenteditable="true" data-key="${key || label}" style="border:.5px solid #BBB;background:#FAFAFA;min-height:${minH};padding:3px 5px;font-size:8.5pt;color:#2A241C;line-height:1.4;outline:none" onfocus="this.style.background='#EEF4FF'" onblur="this.style.background='#FAFAFA'">${savedValue ? savedValue.replace(/\n/g, "<br>") : ""}</div>
      </div>`;
    };

    const duasColunas = (t1: string, v1: string, t2: string, v2: string, r = "1fr 1fr", k1 = "", k2 = "") => `
      <div style="display:grid;grid-template-columns:${r};gap:6px;margin-bottom:0">
        ${campo(t1, v1, 1, k1)} ${campo(t2, v2, 1, k2)}
      </div>`;

    const secao = (t: string) => `<div style="background:#3A5A70;color:white;padding:3px 7px;font-size:8.5pt;font-weight:bold;margin:8px 0 5px;letter-spacing:.3px">${t}</div>`;

    const tabelaObj = (dim: string, need: string, obj: string, act: string, resp: string, prazo: string, keyPrefix: string) => {
      const sv = (k: string, def: string) => picData[k] || def;
      return `
      <div style="font-size:7.5pt;font-weight:bold;color:#2A241C;margin:5px 0 2px">Dimensão: ${dim}</div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:5px;font-size:7.5pt;table-layout:fixed">
        <thead><tr style="background:#E8EEF5">
          <th style="border:.5px solid #CCC;padding:2px 3px;text-align:left;width:22%">Necessidade/Diagnóstico</th>
          <th style="border:.5px solid #CCC;padding:2px 3px;text-align:left;width:22%">Objetivo</th>
          <th style="border:.5px solid #CCC;padding:2px 3px;text-align:left;width:28%">Atividade/Intervenção</th>
          <th style="border:.5px solid #CCC;padding:2px 3px;text-align:left;width:16%">Responsável</th>
          <th style="border:.5px solid #CCC;padding:2px 3px;text-align:left;width:12%">Prazo</th>
        </tr></thead>
        <tbody>
          ${[0,1].map(row => `<tr>${[
            [keyPrefix+`_r${row}_need`, row===0?need:""],
            [keyPrefix+`_r${row}_obj`, row===0?obj:""],
            [keyPrefix+`_r${row}_act`, row===0?act:""],
            [keyPrefix+`_r${row}_resp`, row===0?resp:""],
            [keyPrefix+`_r${row}_prazo`, row===0?prazo:""],
          ].map(([k,def]) => `<td style="border:.5px solid #CCC;padding:0;height:16px"><div contenteditable="true" data-key="${k}" style="padding:2px 3px;min-height:16px;outline:none;font-size:7.5pt" onfocus="this.style.background='#EEF4FF'" onblur="this.style.background=''">${sv(k as string, def as string)}</div></td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>`;
    };


    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>PIC — ${u.name}</title>
    <style>
      @page { size: A4; margin: 12mm 15mm; }
      @media print {
        .no-print { display: none !important; }
        [contenteditable] { background: #FAFAFA !important; outline: none !important; border-color: #BBB !important; }
        body { padding: 0 !important; }
        .no-print-never { display: block !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
      body { font-family: Arial, sans-serif; font-size: 8.5pt; color: #2A241C; width: 180mm; margin: 0 auto; padding: 8mm; box-sizing: border-box; }
      [contenteditable]:focus { background: #EEF4FF !important; }
      table { page-break-inside: avoid; }
      .secao-break { page-break-before: always; }
    </style></head><body>

    <div class="no-print" style="background:#2A241C;color:#F5B944;padding:10px 16px;margin-bottom:12px;border-radius:8px;font-size:11pt;font-weight:600;display:flex;align-items:center;justify-content:space-between">
      <span>📋 PIC — ${u.name}</span>
      <div style="display:flex;gap:8px">
        <button onclick="guardarNaApp()" style="background:#3A5A70;color:white;border:none;padding:6px 14px;border-radius:6px;font-weight:700;cursor:pointer;font-size:10pt">💾 Guardar na app</button>
        <button onclick="window.print()" style="background:#F5B944;color:#2A241C;border:none;padding:6px 16px;border-radius:6px;font-weight:700;cursor:pointer;font-size:10pt">🖨️ Imprimir / PDF</button>
      </div>
    </div>

    <script>
    function guardarNaApp() {
      const campos = {};
      document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if (k) campos[k] = el.innerText.trim();
      });
      // Guardar estado dos checkboxes dos riscos
      document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        campos[cb.name] = cb.checked ? "1" : "0";
      });
      if (window.opener && window.opener.__savePIC) {
        window.opener.__savePIC(campos);
        const btn = event.target;
        btn.textContent = '✅ Guardado!';
        btn.style.background = '#3B6D11';
        setTimeout(() => { btn.textContent = '💾 Guardar na app'; btn.style.background = '#3A5A70'; }, 2000);
      } else {
        alert('⚠️ Não foi possível comunicar com a app. Feche e abra o PIC novamente.');
      }
    }
    </script>

    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:13pt;font-weight:bold;color:#2A241C">ASSOCIAÇÃO OLIVEIRENSE DE SOCORROS MÚTUOS</div>
      <div style="font-size:9pt;color:#3A5A70">Estrutura Residencial para Pessoas Idosas (ERPI)</div>
      <hr style="border:none;border-top:1.5px solid #3A5A70;margin:4px 0">
      <div style="font-size:12pt;font-weight:bold;color:#3A5A70;letter-spacing:1px">PLANO INDIVIDUAL DE CUIDADOS</div>
    </div>

    ${secao("1. IDENTIFICAÇÃO DO RESIDENTE")}
    ${campo("Nome completo", u.name || "", 1, "nome")}
    ${duasColunas("Data de nascimento", u.birthDate || "", "Naturalidade", u.naturalidade || "", "1fr 1fr", "data_nasc", "naturalidade")}
    ${duasColunas("Nacionalidade", u.nacionalidade || "", "Estado civil", u.estadoCivil || "", "1fr 1fr", "nacionalidade", "estado_civil")}
    ${duasColunas("NIF", u.nif || "", "Nº Cartão de Cidadão", u.ccNumber || "", "1fr 1fr", "nif", "cc")}
    ${campo("Morada anterior", u.morada || "", 1, "morada")}
    ${duasColunas("Data de admissão", u.entryDate || "", "Quarto", u.room || "", "2fr 1fr", "data_admissao", "quarto")}
    ${duasColunas("Familiar / representante legal", u.familyContact || "", "Contacto telefónico", u.familyPhone || "", "2fr 1fr", "familiar", "telefone")}
    ${campo("Técnico responsável", "", 1, "tecnico")}

    ${secao("2. AVALIAÇÃO DIAGNÓSTICA")}
    ${campo("Motivo de admissão / caracterização da situação", aiTexts.motivo || u.otherNotes || "", 3, "motivo")}
    ${campo("Historial clínico relevante", u.dailyLogs?.[0]?.text || "", 3, "historial")}
    ${campo("Medicação em vigor", meds, 2, "medicacao")}
    ${campo("Alergias conhecidas", "", 1, "alergias")}
    ${duasColunas("Grau de dependência (AVD)", "", "Mobilidade", "", "1fr 1fr", "dependencia", "mobilidade")}
    ${duasColunas("Estado cognitivo", "", "Estado emocional / psicológico", "", "1fr 1fr", "cognitivo", "emocional")}
    ${campo("Hábitos de vida, preferências e gostos pessoais", aiTexts.habitos || [u.feedingNotes ? "Alimentação: " + u.feedingNotes : "", u.hygieneNotes ? "Higiene: " + u.hygieneNotes : ""].filter(Boolean).join(" | "), 2, "habitos")}
    ${campo("Expectativas do residente / familiar", "", 2, "expectativas")}

    ${secao("3. OBJETIVOS E INTERVENÇÕES POR DIMENSÃO")}
    ${tabelaObj("Cuidados pessoais e higiene", u.hygieneNotes || "", aiTexts.obj_higiene || "Manutenção de higiene e conforto", aiTexts.act_higiene || "Higiene corporal assistida diária", "Auxiliar", "Diário", "dim0")}
    ${tabelaObj("Saúde / Cuidados de enfermagem", meds, aiTexts.obj_saude || (meds ? "Administração correta da terapêutica" : ""), aiTexts.act_saude || (meds ? "Preparação e administração de medicação" : ""), meds ? "Enfermeiro(a)" : "", meds ? "Diário" : "", "dim1")}
    ${tabelaObj("Alimentação e hidratação", u.feedingNotes || "", aiTexts.obj_alimentacao || (u.feedingNotes ? "Alimentação adequada às necessidades" : ""), aiTexts.act_alimentacao || (u.feedingNotes ? "Apoio às refeições" : ""), u.feedingNotes ? "Auxiliar" : "", u.feedingNotes ? "Diário" : "", "dim2")}
    ${tabelaObj("Animação sociocultural e ocupacional", "", "", "", "", "", "dim3")}
    ${tabelaObj("Psicossocial / bem-estar emocional", "", "", "", "", "", "dim4")}

    ${secao("4. IDENTIFICAÇÃO DE RISCOS E MEDIDAS PREVENTIVAS")}
    <table style="width:100%;border-collapse:collapse;font-size:8pt;margin-bottom:10px">
      <thead><tr style="background:#E8EEF5">
        <th style="border:.5px solid #CCC;padding:3px 4px;text-align:left;width:30%">Risco</th>
        <th style="border:.5px solid #CCC;padding:3px 4px;text-align:center;width:8%">Sim</th>
        <th style="border:.5px solid #CCC;padding:3px 4px;text-align:center;width:8%">Não</th>
        <th style="border:.5px solid #CCC;padding:3px 4px;text-align:left">Medidas preventivas</th>
      </tr></thead>
      <tbody>
        ${["Queda","Úlcera de pressão","Desnutrição / desidratação","Isolamento social","Deterioração cognitiva","Outro"].map((r, ri) => `
        <tr>
          <td style="border:.5px solid #CCC;padding:3px 4px;font-size:8pt">${r}</td>
          <td style="border:.5px solid #CCC;padding:2px;text-align:center"><input type="checkbox" name="risco_sim_${ri}" style="width:14px;height:14px;cursor:pointer" ${picData[`risco_sim_${ri}`] === "1" ? "checked" : ""}></td>
          <td style="border:.5px solid #CCC;padding:2px;text-align:center"><input type="checkbox" name="risco_nao_${ri}" style="width:14px;height:14px;cursor:pointer" ${picData[`risco_nao_${ri}`] === "1" ? "checked" : ""}></td>
          <td style="border:.5px solid #CCC;padding:0"><div contenteditable="true" data-key="risco_med_${ri}" style="padding:2px 4px;min-height:16px;outline:none;font-size:8pt" onfocus="this.style.background='#EEF4FF'" onblur="this.style.background=''">${picData[`risco_med_${ri}`] || ""}</div></td>
        </tr>`).join("")}
      </tbody>
    </table>

    ${secao("5. VALIDAÇÃO E ASSINATURAS")}
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
      ${campo("Data de elaboração", hoje)}
      ${campo("Data de 1.ª revisão prevista", dataRevisao)}
      ${campo("Data de última revisão", "")}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      ${["Diretor(a) Técnico(a)","Residente / Representante legal","Familiar / Responsável"].map(t => `
        <div style="border:.5px solid #CCC;padding:8px;text-align:center;min-height:60px">
          <div style="font-size:7.5pt;font-weight:bold;margin-bottom:24px">${t}</div>
          <div style="border-top:.5px solid #999;margin:0 8px 4px"></div>
          <div style="font-size:7.5pt;color:#666">Data: ___/___/______</div>
        </div>`).join("")}
    </div>

    <div style="text-align:center;font-size:7pt;color:#999;margin-top:12px;border-top:.5px solid #CCC;padding-top:4px">
      Associação Oliveirense de Socorros Mútuos — ERPI · Portaria n.º 67/2012 de 21 de março · Documento a rever anualmente ou sempre que se justifique
    </div>
    </body></html>`;

    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }

    // Expor função de callback para guardar dados de volta na app
    (window as any).__savePIC = (campos: Record<string, string>) => {
      updateUtente(u.id, { picData: { ...(u.picData || {}), ...campos } });
    };

    w.document.open(); w.document.write(html); w.document.close();
    w.focus();
  };


  const handleGetFamilyLink = (utente: Utente) => {
    let code = utente.familyCode;
    if (!code) {
      code = generateFamilyCode();
      updateUtente(utente.id, { familyCode: code });
    }
    const link = `${window.location.origin}${window.location.pathname}?familia=${code}`;
    setFamilyLinkModal({ name: utente.name, link });
  };

  const [uploadingEmenta, setUploadingEmenta] = useState(false);
  const handleUploadEmenta = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,.pdf";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      setUploadingEmenta(true);
      uploadUtenteDoc("ementa-semana", file).then((url) => {
        if (!url) {
          alert("❌ Erro ao carregar o ficheiro para o armazenamento. Verifique a ligação e tente novamente.");
          setUploadingEmenta(false);
          return;
        }
        saveToSupabase("ementa_data", {
          ementa: { url, type: file.type, uploadedAt: new Date().toISOString() },
        }).then(() => {
          alert(`✅ Ementa da semana atualizada! Já está visível para todas as famílias.\n\nLink: ${url}`);
        }).catch((err) => {
          alert(`❌ Erro ao guardar a ementa na base de dados: ${err?.message || err}`);
        }).finally(() => setUploadingEmenta(false));
      });
    };
    document.body.appendChild(input); input.click(); document.body.removeChild(input);
  };

  const handleRemoveEmenta = () => {
    if (!window.confirm("Remover a ementa atual? As famílias deixarão de a ver até carregar uma nova.")) return;
    saveToSupabase("ementa_data", { ementa: null }).then(() => {
      alert("✅ Ementa removida.");
    }).catch(() => {
      alert("❌ Erro ao remover a ementa.");
    });
  };

  const filteredUtentes = utentes.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    (u.room && u.room.toLowerCase().includes(search.toLowerCase()))
  );

  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    return words.length >= 2 ? (words[0][0] + words[words.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
  };

  const [showCCPanel, setShowCCPanel] = useState<string | null>(null);
  const [newMedName, setNewMedName] = useState("");
  const [newMedDose, setNewMedDose] = useState("");
  const [newMedSchedule, setNewMedSchedule] = useState("");

  const addMedication = (utenteId: string) => {
    if (!newMedName.trim()) return;
    const med = { id: Date.now().toString() + Math.random().toString(36).slice(2), name: newMedName.trim(), dose: newMedDose.trim(), schedule: newMedSchedule.trim() };
    setUtentes((prev) => prev.map((u) => {
      if (u.id !== utenteId) return u;
      const updated = { ...u, medications: [...(u.medications || []), med] };
      if (openUtente?.id === utenteId) setOpenUtente(updated);
      return updated;
    }));
    setNewMedName(""); setNewMedDose(""); setNewMedSchedule("");
  };

  const removeMedication = (utenteId: string, medId: string) => {
    setUtentes((prev) => prev.map((u) => {
      if (u.id !== utenteId) return u;
      const updated = { ...u, medications: (u.medications || []).filter((m) => m.id !== medId) };
      if (openUtente?.id === utenteId) setOpenUtente(updated);
      return updated;
    }));
  };

  // ---------- Registo diário (substitui o campo Observações único) ----------
  const [newLogText, setNewLogText] = useState("");
  const todayStr = new Date().toLocaleDateString("pt-PT");
  const [editingLogIdx, setEditingLogIdx] = useState<number | null>(null);
  const [editingLogText, setEditingLogText] = useState("");
  const [unlockedLogs, setUnlockedLogs] = useState<Set<string>>(new Set());
  const EDIT_PASSWORD = "UTENTES";

  const isLogEditable = (utenteId: string, idx: number, logDate: string) => {
    if (logDate === todayStr) return true;
    return unlockedLogs.has(`${utenteId}-${idx}`);
  };

  const requestUnlock = (utenteId: string, idx: number) => {
    const pwd = window.prompt("Este registo é de um dia anterior. Introduza a password de autorização para editar:");
    if (pwd === null) return false;
    if (pwd === EDIT_PASSWORD) {
      setUnlockedLogs((prev) => new Set(prev).add(`${utenteId}-${idx}`));
      return true;
    }
    alert("❌ Password incorreta.");
    return false;
  };

  const saveEditedLog = (utenteId: string, idx: number) => {
    setUtentes((prev) => prev.map((uu) => {
      if (uu.id !== utenteId) return uu;
      const logs = [...(uu.dailyLogs || [])];
      logs[idx] = { ...logs[idx], text: editingLogText };
      const updated = { ...uu, dailyLogs: logs };
      if (openUtente?.id === utenteId) setOpenUtente(updated);
      return updated;
    }));
    setEditingLogIdx(null);
    setEditingLogText("");
  };

  const addDailyLog = (utenteId: string) => {
    if (!newLogText.trim()) return;
    setUtentes((prev) => prev.map((u) => {
      if (u.id !== utenteId) return u;
      const logs = u.dailyLogs || [];
      const existingTodayIdx = logs.findIndex((l) => l.date === todayStr);
      let newLogs;
      if (existingTodayIdx >= 0) {
        // Já existe registo de hoje — acrescenta (não substitui)
        newLogs = [...logs];
        newLogs[existingTodayIdx] = { ...newLogs[existingTodayIdx], text: newLogs[existingTodayIdx].text + "\n\n" + newLogText.trim() };
      } else {
        newLogs = [{ date: todayStr, text: newLogText.trim() }, ...logs];
      }
      const updated = { ...u, dailyLogs: newLogs };
      if (openUtente?.id === utenteId) setOpenUtente(updated);
      return updated;
    }));
    setNewLogText("");
  };

  const printDailyLog = (utente: Utente, log: { date: string; text: string }) => {
    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Registo — ${utente.name} — ${log.date}</title>
    <style>
      @page { size: A4; margin: 20mm; }
      body { font-family: Arial, sans-serif; color: #2A241C; }
      h1 { font-size: 18px; margin: 0 0 4px; }
      .sub { font-size: 12px; color: #888; margin: 0 0 20px; }
      .date-badge { display: inline-block; background: #2A241C; color: #F5B944; border-radius: 20px; padding: 6px 16px; font-size: 13px; font-weight: bold; margin-bottom: 16px; }
      .text-box { font-size: 14px; line-height: 1.8; white-space: pre-wrap; border: 1px solid #E4DED3; border-radius: 8px; padding: 18px; }
    </style></head><body>
    <h1>Registo do Dia — ${utente.name}</h1>
    <p class="sub">Associação Oliveirense de Socorros Mútuos · Gerado em ${new Date().toLocaleDateString("pt-PT")}</p>
    <div class="date-badge">${log.date}</div>
    <div class="text-box">${log.text.replace(/\n/g, "<br>")}</div>
    </body></html>`;
    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#E8EEF5", minHeight: "100vh", padding: "32px 24px 60px", color: "#2A241C", animation: "pageOpen 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards" }}>
      {tooltip && (
        <div style={{ position: "fixed" as const, left: tooltip.x, top: tooltip.y, transform: "translateX(-50%)", background: "#2A241C", color: "#FBF9F5", fontSize: 12, fontWeight: 500, padding: "5px 10px", borderRadius: 7, pointerEvents: "none" as const, zIndex: 9999, whiteSpace: "nowrap" as const, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>{tooltip.text}</div>
      )}

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1300, margin: "0 auto 24px", flexWrap: "wrap" as const, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 12px", cursor: "pointer", color: "#6B6358", fontSize: 13, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => showTip(e, "Voltar à escala de turnos")} onMouseLeave={hideTip}>
            <IconChevronLeft size={16} /> Voltar
          </button>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#1A1612", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconUserCircle size={20} color="#F5B944" />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700 }}>Utentes</div>
            <div style={{ fontSize: 12, color: "#A39B8E" }}>{utentes.length} utente(s) registado(s)</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: "#6B6358" }}
            onClick={exportExcelUtentes} onMouseEnter={(e) => showTip(e, "Exportar para Excel")} onMouseLeave={hideTip}>
            <IconFileSpreadsheet size={16} />
          </button>
          <button style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: "#6B6358" }}
            onClick={exportPDFUtentes} onMouseEnter={(e) => showTip(e, "Imprimir / Guardar PDF")} onMouseLeave={hideTip}>
            <IconPrinter size={16} />
          </button>
        </div>
      </header>
      <div style={{ display: "flex", gap: 10, maxWidth: 1300, margin: "0 auto 12px", alignItems: "center", flexWrap: "wrap" as const }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome ou quarto..."
          style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const }}
        />
        <button
          onClick={handleImportUtenteJSON}
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const }}
          onMouseEnter={(e) => showTip(e, "Importar utentes de JSON (gerado pelo Claude)")}
          onMouseLeave={hideTip}
        >
          <IconDownload size={14} /> JSON
        </button>
        <button
          onClick={handleUploadEmenta}
          disabled={uploadingEmenta}
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: uploadingEmenta ? "#A39B8E" : "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 14px", fontSize: 13, fontWeight: 600, cursor: uploadingEmenta ? "default" : "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const }}
          onMouseEnter={(e) => showTip(e, "Carregar ementa da semana (visível às famílias)")}
          onMouseLeave={hideTip}
        >
          🍽️ {uploadingEmenta ? "A carregar..." : "Ementa"}
        </button>
        <button
          onClick={handleRemoveEmenta}
          style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FFFFFF", color: "#C2554A", border: "1px solid #F2C4BC", borderRadius: 10, padding: "10px 10px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
          onMouseEnter={(e) => showTip(e, "Remover ementa atual")}
          onMouseLeave={hideTip}
        >
          🗑️
        </button>
        <button
          onClick={onGerarERPI}
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F0E8F5", color: "#7B3FA0", border: "1px solid #D4B8E8", borderRadius: 10, padding: "10px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const }}
          onMouseEnter={(e) => showTip(e, "Gerar Relatório de Actividade ERPI")}
          onMouseLeave={hideTip}
        >
          🏠 Rel. ERPI
        </button>

        {showAdd ? (
          <div style={{ display: "flex", gap: 8 }}>
            <input autoFocus value={newName} onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") addUtente(); if (e.key === "Escape") { setShowAdd(false); setNewName(""); } }}
              placeholder="Nome do utente"
              style={{ border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const, width: 220 }} />
            <button onMouseDown={(e) => e.preventDefault()} onClick={addUtente} style={{ background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Adicionar</button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => { setShowAdd(false); setNewName(""); }} style={{ background: "transparent", border: "1px solid #E4DED3", borderRadius: 8, padding: "10px 14px", fontSize: 13, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>Cancelar</button>
          </div>
        ) : (
          <button onClick={() => setShowAdd(true)} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const }}>
            <IconPlus2 size={15} /> Adicionar utente
          </button>
        )}
      </div>

      {/* Resultado da importação */}
      {importResult && (
        <div style={{ maxWidth: 1300, margin: "0 auto 16px", background: importResult.startsWith("✅") ? "#E8F5E9" : "#FFF5F4", border: `1px solid ${importResult.startsWith("✅") ? "#A5D6A7" : "#F2C4BC"}`, borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 500, color: importResult.startsWith("✅") ? "#2E7D32" : "#9B3A2F", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{importResult}</span>
          <button onClick={() => setImportResult(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 16, color: "#A39B8E" }}>✕</button>
        </div>
      )}

      {/* Grelha de utentes */}
      {filteredUtentes.length === 0 ? (
        <div style={{ textAlign: "center" as const, color: "#A39B8E", fontSize: 14, padding: "60px 20px", background: "#FFFFFF", borderRadius: 14, border: "1px solid #E4DED3", maxWidth: 1300, margin: "0 auto" }}>
          {search ? `Nenhum utente encontrado para "${search}"` : "Nenhum utente registado ainda.\nClique em \"Adicionar utente\" para começar."}
        </div>
      ) : (
        <div className="utentes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, maxWidth: 1300, margin: "0 auto" }}>
          {filteredUtentes.map((utente) => (
            <div
              key={utente.id}
              style={{ background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14, padding: "20px 16px", cursor: "pointer", transition: "box-shadow 0.15s", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, position: "relative" as const }}
              onClick={() => setOpenUtente(utente)}
            >
              <button
                style={{ position: "absolute" as const, top: 10, right: 10, border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", padding: 4, borderRadius: 6 }}
                onClick={(e) => { e.stopPropagation(); removeUtente(utente.id); }}
                title="Remover utente"
              >
                <IconTrash2 size={13} />
              </button>
              <div
                className="utente-avatar"
                style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0E8D5", color: "#B08A4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", overflow: "hidden", flexShrink: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (ev: Event) => {
                    const file = (ev.target as HTMLInputElement).files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (r) => updateUtente(utente.id, { photo: r.target?.result as string });
                    reader.readAsDataURL(file);
                  };
                  document.body.appendChild(input); input.click(); document.body.removeChild(input);
                }}
                title="Clique para alterar a foto"
              >
                {utente.photo
                  ? <img src={utente.photo} alt={utente.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : getInitials(utente.name)
                }
              </div>
              <div style={{ textAlign: "center" as const }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#2A241C" }}>{utente.name}</div>
                {utente.room && <div style={{ fontSize: 12, color: "#A39B8E", marginTop: 3 }}>Quarto {utente.room}</div>}
                {utente.birthDate && <div style={{ fontSize: 12, color: "#A39B8E" }}>{utente.birthDate}</div>}
              </div>
              {(utente.files?.length ?? 0) > 0 && (
                <div style={{ fontSize: 11, color: "#5B8DBE", fontWeight: 600 }}>📎 {utente.files!.length} documento(s)</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Painel lateral da ficha do utente */}
      {openUtente && (() => { const u = openUtente; return (
        <div style={{ position: "fixed" as const, inset: 0, zIndex: 60, background: "#F0F4F8", display: "flex", flexDirection: "column" as const, animation: "slideUp 0.38s cubic-bezier(0.32, 0.72, 0, 1) both" }}>

          {/* Header */}
          <div style={{ background: "#2A241C", padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, flexShrink: 0, position: "relative" as const }}>
            <div
              style={{ width: 52, height: 52, borderRadius: "50%", background: "#F0E8D5", color: "#B08A4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0, overflow: "hidden", cursor: "pointer", position: "relative" as const }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file"; input.accept = "image/*";
                input.onchange = async (ev: Event) => {
                  const file = (ev.target as HTMLInputElement).files?.[0];
                  if (!file) return;
                  // Tentar upload para Storage primeiro
                  const url = await uploadUtenteDoc(u.id + "_photo", file);
                  if (url) {
                    updateUtente(u.id, { photo: url });
                  } else {
                    // Fallback base64 comprimido
                    const img = new Image();
                    const objUrl = URL.createObjectURL(file);
                    img.onload = () => {
                      const canvas = document.createElement("canvas");
                      const MAX = 400;
                      let { width, height } = img;
                      if (width > height) { height = Math.round(height * MAX / width); width = MAX; }
                      else { width = Math.round(width * MAX / height); height = MAX; }
                      canvas.width = width; canvas.height = height;
                      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
                      URL.revokeObjectURL(objUrl);
                      updateUtente(u.id, { photo: canvas.toDataURL("image/jpeg", 0.7) });
                    };
                    img.src = objUrl;
                  }
                };
                document.body.appendChild(input); input.click(); document.body.removeChild(input);
              }}
              title="Clique para alterar a foto"
            >
              {u.photo
                ? <>
                    <img src={u.photo} alt={u.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div onClick={(e) => { e.stopPropagation(); updateUtente(u.id, { photo: "" }); }}
                      style={{ position: "absolute" as const, inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, borderRadius: "50%" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                      title="Remover foto"
                    >
                      <span style={{ color: "white", fontSize: 18 }}>🗑️</span>
                    </div>
                  </>
                : u.name.slice(0, 2).toUpperCase()
              }
            </div>
            <div style={{ flex: 1 }}>
              <input
                value={u.name}
                onChange={(e) => updateUtente(u.id, { name: e.target.value })}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, border: "none", borderBottom: "1px solid #4A3E30", background: "transparent", outline: "none", width: "100%", color: "#FFFFFF", padding: "2px 0" }}
              />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => handleGetFamilyLink(u)} style={{ background: "#3A5A70", color: "white", border: "none", borderRadius: 8, padding: "8px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>🔗 Família</button>
              <button onClick={() => setOpenUtente(null)} style={{ background: "transparent", border: "1px solid #4A3E30", borderRadius: 8, padding: "8px 10px", cursor: "pointer", color: "#C9C2B5" }}><IconX size={16} /></button>
            </div>
          </div>

          {/* Separadores */}
          <div style={{ background: "#2A241C", display: "flex", gap: 0, flexShrink: 0, borderTop: "1px solid #3A3028", overflowX: "auto" as const }}>
            {([
              { key: "geral", label: "🏠 Geral" },
              { key: "registo", label: "📝 Registo do Dia" },
              { key: "medicacao", label: "💊 Medicação" },
              { key: "cuidados", label: "🧼 Cuidados" },
              { key: "pic", label: "📋 PIC" },
            ] as { key: typeof utenteTab; label: string }[]).map((tab) => (
              <button key={tab.key} onClick={() => setUtenteTab(tab.key)}
                style={{ padding: "10px 18px", border: "none", background: "transparent", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const, color: utenteTab === tab.key ? "#F5B944" : "#A39B8E", borderBottom: utenteTab === tab.key ? "2px solid #F5B944" : "2px solid transparent" }}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Conteúdo do separador activo */}
          <div style={{ flex: 1, overflowY: "auto" as const, padding: 20 }}>

            {/* ── GERAL ── */}
            {utenteTab === "geral" && (
              <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 12 }}>

                {/* Leitura do CC com IA — desactivado temporariamente */}
                <div style={{ display: "none" }}>
                <div style={{ background: "#2A241C", borderRadius: 14, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#F5B944", marginBottom: 2 }}>✨ Ler Cartão de Cidadão com IA</div>
                    <div style={{ fontSize: 11, color: "#A39B8E" }}>Fotografa ou faz upload do CC — a IA preenche os dados automaticamente</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button
                      onClick={() => {
                        const input = document.createElement("input");
                        input.type = "file"; input.accept = "image/*"; input.setAttribute("capture", "environment");
                        input.onchange = async (ev: Event) => {
                          const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                          const loadingEl = document.getElementById("cc-loading");
                          if (loadingEl) loadingEl.style.display = "block";
                          try {
                            // Converter HEIC/HEIF para JPEG via canvas (compatibilidade com iPhone)
                            const convertToJpeg = (f: File): Promise<{ base64: string; mediaType: string }> => {
                              return new Promise((res, rej) => {
                                const url = URL.createObjectURL(f);
                                const img = new Image();
                                img.onload = () => {
                                  const canvas = document.createElement("canvas");
                                  canvas.width = img.width; canvas.height = img.height;
                                  canvas.getContext("2d")!.drawImage(img, 0, 0);
                                  canvas.toBlob((blob) => {
                                    URL.revokeObjectURL(url);
                                    if (!blob) { rej(new Error("Conversão falhou")); return; }
                                    const r = new FileReader();
                                    r.onload = (e) => res({ base64: (e.target?.result as string).split(",")[1], mediaType: "image/jpeg" });
                                    r.onerror = rej;
                                    r.readAsDataURL(blob);
                                  }, "image/jpeg", 0.9);
                                };
                                img.onerror = () => {
                                  // Fallback: ler ficheiro directamente
                                  URL.revokeObjectURL(url);
                                  const r = new FileReader();
                                  r.onload = (e) => res({ base64: (e.target?.result as string).split(",")[1], mediaType: file.type || "image/jpeg" });
                                  r.onerror = rej;
                                  r.readAsDataURL(f);
                                };
                                img.src = url;
                              });
                            };
                            const { base64, mediaType } = await convertToJpeg(file);
                            const response = await fetch("/api/claude", {
                              method: "POST", headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 800, messages: [{ role: "user", content: [{ type: "image", source: { type: "base64", media_type: mediaType, data: base64 } }, { type: "text", text: "Extrai os dados deste Cartão de Cidadão português. Responde APENAS em JSON válido sem markdown: {\"name\":\"nome completo\",\"birthDate\":\"DD/MM/AAAA\",\"ccNumber\":\"número do CC\",\"ccValidity\":\"DD/MM/AAAA\",\"nif\":\"NIF\",\"naturalidade\":\"naturalidade\",\"nacionalidade\":\"nacionalidade\",\"estadoCivil\":\"estado civil\",\"morada\":\"morada se visível\"}" }] }] })
                            });
                            const responseText = await response.text();
                            if (!response.ok) {
                              alert("❌ Erro na API: " + response.status + " — " + responseText.slice(0, 100));
                            } else {
                              try {
                                const data = JSON.parse(responseText);
                                const text = data.content?.map((c: any) => c.text || "").join("") || "";
                                const jsonMatch = text.match(/\{[\s\S]*\}/);
                                const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : text);
                                const updates: any = {};
                                if (parsed.name) updates.name = parsed.name;
                                if (parsed.birthDate) updates.birthDate = parsed.birthDate;
                                if (parsed.ccNumber) updates.ccNumber = parsed.ccNumber;
                                if (parsed.ccValidity) updates.ccValidity = parsed.ccValidity;
                                if (parsed.nif) updates.nif = parsed.nif;
                                if (parsed.naturalidade) updates.naturalidade = parsed.naturalidade;
                                if (parsed.nacionalidade) updates.nacionalidade = parsed.nacionalidade;
                                if (parsed.estadoCivil) updates.estadoCivil = parsed.estadoCivil;
                                if (parsed.morada) updates.morada = parsed.morada;
                                if (Object.keys(updates).length === 0) {
                                  alert("⚠️ A IA não conseguiu extrair dados. Certifique-se que a foto está nítida e o CC visível.");
                                } else {
                                  updateUtente(u.id, updates);
                                  alert("✅ " + Object.keys(updates).length + " campo(s) preenchidos automaticamente! Verifique e corrija se necessário.");
                                }
                              } catch (parseErr) {
                                alert("❌ Erro ao interpretar resposta da IA. Tente com uma foto mais nítida.");
                              }
                            }
                          } catch (e: any) { alert("❌ Erro de ligação: " + (e?.message || "Verifique a sua ligação à internet.")); }
                          if (loadingEl) loadingEl.style.display = "none";
                        };
                        document.body.appendChild(input); input.click(); document.body.removeChild(input);
                      }}
                      style={{ background: "#F5B944", color: "#2A241C", border: "none", borderRadius: 10, padding: "10px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 6 }}
                    >📷 Câmara</button>
                    <button
                      onClick={() => {
                        const input = document.createElement("input");
                        input.type = "file"; input.accept = "image/*";
                        input.onchange = async (ev: Event) => {
                          const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                          const loadingEl = document.getElementById("cc-loading");
                          if (loadingEl) loadingEl.style.display = "block";
                          try {
                            // Converter HEIC/HEIF para JPEG via canvas (compatibilidade com iPhone)
                            const convertToJpeg = (f: File): Promise<{ base64: string; mediaType: string }> => {
                              return new Promise((res, rej) => {
                                const url = URL.createObjectURL(f);
                                const img = new Image();
                                img.onload = () => {
                                  const canvas = document.createElement("canvas");
                                  canvas.width = img.width; canvas.height = img.height;
                                  canvas.getContext("2d")!.drawImage(img, 0, 0);
                                  canvas.toBlob((blob) => {
                                    URL.revokeObjectURL(url);
                                    if (!blob) { rej(new Error("Conversão falhou")); return; }
                                    const r = new FileReader();
                                    r.onload = (e) => res({ base64: (e.target?.result as string).split(",")[1], mediaType: "image/jpeg" });
                                    r.onerror = rej;
                                    r.readAsDataURL(blob);
                                  }, "image/jpeg", 0.9);
                                };
                                img.onerror = () => {
                                  // Fallback: ler ficheiro directamente
                                  URL.revokeObjectURL(url);
                                  const r = new FileReader();
                                  r.onload = (e) => res({ base64: (e.target?.result as string).split(",")[1], mediaType: file.type || "image/jpeg" });
                                  r.onerror = rej;
                                  r.readAsDataURL(f);
                                };
                                img.src = url;
                              });
                            };
                            const { base64, mediaType } = await convertToJpeg(file);
                            const response = await fetch("/api/claude", {
                              method: "POST", headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 800, messages: [{ role: "user", content: [{ type: "image", source: { type: "base64", media_type: mediaType, data: base64 } }, { type: "text", text: "Extrai os dados deste Cartão de Cidadão português. Responde APENAS em JSON válido sem markdown: {\"name\":\"nome completo\",\"birthDate\":\"DD/MM/AAAA\",\"ccNumber\":\"número do CC\",\"ccValidity\":\"DD/MM/AAAA\",\"nif\":\"NIF\",\"naturalidade\":\"naturalidade\",\"nacionalidade\":\"nacionalidade\",\"estadoCivil\":\"estado civil\",\"morada\":\"morada se visível\"}" }] }] })
                            });
                            const responseText = await response.text();
                            if (!response.ok) {
                              alert("❌ Erro na API: " + response.status + " — " + responseText.slice(0, 100));
                            } else {
                              try {
                                const data = JSON.parse(responseText);
                                const text = data.content?.map((c: any) => c.text || "").join("") || "";
                                const jsonMatch = text.match(/\{[\s\S]*\}/);
                                const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : text);
                                const updates: any = {};
                                if (parsed.name) updates.name = parsed.name;
                                if (parsed.birthDate) updates.birthDate = parsed.birthDate;
                                if (parsed.ccNumber) updates.ccNumber = parsed.ccNumber;
                                if (parsed.ccValidity) updates.ccValidity = parsed.ccValidity;
                                if (parsed.nif) updates.nif = parsed.nif;
                                if (parsed.naturalidade) updates.naturalidade = parsed.naturalidade;
                                if (parsed.nacionalidade) updates.nacionalidade = parsed.nacionalidade;
                                if (parsed.estadoCivil) updates.estadoCivil = parsed.estadoCivil;
                                if (parsed.morada) updates.morada = parsed.morada;
                                if (Object.keys(updates).length === 0) {
                                  alert("⚠️ A IA não conseguiu extrair dados. Certifique-se que a foto está nítida e o CC visível.");
                                } else {
                                  updateUtente(u.id, updates);
                                  alert("✅ " + Object.keys(updates).length + " campo(s) preenchidos automaticamente! Verifique e corrija se necessário.");
                                }
                              } catch (parseErr) {
                                alert("❌ Erro ao interpretar resposta da IA. Tente com uma foto mais nítida.");
                              }
                            }
                          } catch (e: any) { alert("❌ Erro de ligação: " + (e?.message || "Verifique a sua ligação à internet.")); }
                          if (loadingEl) loadingEl.style.display = "none";
                        };
                        document.body.appendChild(input); input.click(); document.body.removeChild(input);
                      }}
                      style={{ background: "#3A5A70", color: "white", border: "none", borderRadius: 10, padding: "10px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 6 }}
                    >⬆️ Upload</button>
                  </div>
                </div>
                <div id="cc-loading" style={{ display: "none", background: "#FFF8E1", borderRadius: 10, padding: "10px 16px", fontSize: 13, color: "#8A6A2E", textAlign: "center" as const }}>
                  ✨ A ler o Cartão de Cidadão com IA...
                </div>
                </div>

                {/* Dados básicos */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3A5A70", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>🏠 Dados Gerais</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { key: "room", label: "Quarto", placeholder: "Ex: 14 cama 2" },
                      { key: "entryDate", label: "Data de entrada", placeholder: "Ex: 15/03/2022" },
                      { key: "birthDate", label: "Data de nascimento", placeholder: "Ex: 01/01/1940" },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                        <input value={(u as any)[key] || ""} onChange={(e) => updateUtente(u.id, { [key]: e.target.value })} placeholder={placeholder}
                          style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contacto familiar */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3A5A70", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>👨‍👩‍👧 Contacto Familiar</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { key: "familyContact", label: "Nome do familiar", placeholder: "Ex: João Silva (filho)" },
                      { key: "familyPhone", label: "Telefone", placeholder: "Ex: 912 345 678" },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                        <input value={(u as any)[key] || ""} onChange={(e) => updateUtente(u.id, { [key]: e.target.value })} placeholder={placeholder}
                          style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dados do Cartão de Cidadão */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3A5A70", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>📇 Cartão de Cidadão</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { key: "ccNumber", label: "Nº do CC", placeholder: "Ex: 12345678 9 ZZ0" },
                      { key: "ccValidity", label: "Validade do CC", placeholder: "DD/MM/AAAA" },
                      { key: "nif", label: "NIF", placeholder: "Ex: 123456789" },
                      { key: "naturalidade", label: "Naturalidade", placeholder: "Ex: Vila Nova de Gaia" },
                      { key: "nacionalidade", label: "Nacionalidade", placeholder: "Ex: Portuguesa" },
                      { key: "estadoCivil", label: "Estado civil", placeholder: "Ex: Viúvo(a)" },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                        <input value={(u as any)[key] || ""} onChange={(e) => updateUtente(u.id, { [key]: e.target.value })} placeholder={placeholder}
                          style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Morada</label>
                    <input value={u.morada || ""} onChange={(e) => updateUtente(u.id, { morada: e.target.value })} placeholder="Endereço completo"
                      style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const }} />
                  </div>
                </div>

                {/* Documentos */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3A5A70", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>📎 Documentos — Instituição</div>
                  <div style={{ fontSize: 11, color: "#A39B8E", marginBottom: 8 }}>Apenas visíveis internamente</div>
                  {(u.files || []).map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F7F5F0", borderRadius: 8, padding: "8px 12px", marginBottom: 6 }}>
                      <span style={{ flex: 1, fontSize: 13, color: "#2A241C" }}>📎 {f.name}</span>
                      <a href={f.url || f.data} download={f.name} target={f.url ? "_blank" : undefined} style={{ fontSize: 12, color: "#3A5A70", textDecoration: "none", fontWeight: 600 }}>⬇️</a>
                      <button onClick={() => { if (f.url) deleteUtenteDoc(f.url); updateUtente(u.id, { files: (u.files || []).filter((_, i) => i !== fi) }); }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 12 }}>✕</button>
                    </div>
                  ))}
                  <button onClick={() => {
                    const input = document.createElement("input"); input.type = "file";
                    input.onchange = (ev: Event) => {
                      const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                      const reader = new FileReader();
                      // Comprimir imagens antes de guardar (reduz tamanho até 70%)
                      const compressAndUpload = async (f: File) => {
                        if (!f.type.startsWith("image/")) return uploadUtenteDoc(u.id, f);
                        return new Promise<string | null>((resolve) => {
                          const img = new Image();
                          const url = URL.createObjectURL(f);
                          img.onload = () => {
                            const canvas = document.createElement("canvas");
                            const MAX = 1200;
                            let { width, height } = img;
                            if (width > MAX || height > MAX) {
                              if (width > height) { height = Math.round(height * MAX / width); width = MAX; }
                              else { width = Math.round(width * MAX / height); height = MAX; }
                            }
                            canvas.width = width; canvas.height = height;
                            canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
                            canvas.toBlob((blob) => {
                              URL.revokeObjectURL(url);
                              if (!blob) { resolve(uploadUtenteDoc(u.id, f)); return; }
                              const compressed = new File([blob], f.name, { type: "image/jpeg" });
                              resolve(uploadUtenteDoc(u.id, compressed));
                            }, "image/jpeg", 0.8);
                          };
                          img.onerror = () => { URL.revokeObjectURL(url); resolve(uploadUtenteDoc(u.id, f)); };
                          img.src = url;
                        });
                      };

                      compressAndUpload(file).then((url) => {
                        if (url) {
                          updateUtente(u.id, { files: [...(u.files || []), { name: file.name, type: file.type, data: "", url, uploadedAt: new Date().toISOString() }] });
                        } else {
                          // Fallback para base64 se o upload falhar
                          reader.onload = (r) => updateUtente(u.id, { files: [...(u.files || []), { name: file.name, type: file.type, data: r.target?.result as string, uploadedAt: new Date().toISOString() }] });
                          reader.readAsDataURL(file);
                        }
                      });
                      reader.readAsDataURL(file);
                    };
                    document.body.appendChild(input); input.click(); document.body.removeChild(input);
                  }} style={{ background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar documento
                  </button>
                </div>

                {/* Documentos para a Família */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3A5A70", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>👨‍👩‍👧 Documentos — Família</div>
                  <div style={{ fontSize: 11, color: "#A39B8E", marginBottom: 8 }}>Visíveis no portal da família</div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 10 }}>
                    {(u.filesFamily || []).map((f, fi) => (
                      <div key={fi} style={{ position: "relative" as const }}>
                        {f.type.startsWith("image/")
                          ? <a href={f.url} target="_blank" rel="noopener noreferrer"><img src={f.url} alt={f.name} style={{ width: 72, height: 72, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} /></a>
                          : <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F5F0", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: "#3A5A70", textDecoration: "none" }}>📄 {f.name}</a>
                        }
                        <button onClick={() => updateUtente(u.id, { filesFamily: (u.filesFamily || []).filter((_, i) => i !== fi) })} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => {
                    const input = document.createElement("input"); input.type = "file";
                    input.onchange = async (ev: Event) => {
                      const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                      const url = await uploadUtenteDoc(u.id + "_family", file);
                      if (url) {
                        updateUtente(u.id, { filesFamily: [...(u.filesFamily || []), { name: file.name, type: file.type, url, uploadedAt: new Date().toISOString() }] });
                        alert("✅ Documento adicionado para a família!");
                      } else {
                        // Fallback: guardar como base64 se o Storage falhar
                        const reader = new FileReader();
                        reader.onload = (r) => {
                          const dataUrl = r.target?.result as string;
                          updateUtente(u.id, { filesFamily: [...(u.filesFamily || []), { name: file.name, type: file.type, url: dataUrl, uploadedAt: new Date().toISOString() }] });
                          alert("✅ Documento adicionado para a família! (guardado localmente)");
                        };
                        reader.readAsDataURL(file);
                      }
                    };
                    document.body.appendChild(input); input.click(); document.body.removeChild(input);
                  }} style={{ background: "#E8F0E8", color: "#3B6D11", border: "1px solid #A8C8A0", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar documento para família
                  </button>
                </div>
              </div>
            )}

            {/* ── REGISTO DO DIA ── */}
            {utenteTab === "registo" && (
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <div style={{ marginBottom: 16 }}>
                  <textarea rows={3} value={newLogText} onChange={(e) => setNewLogText(e.target.value)}
                    placeholder={`Escrever registo de hoje (${todayStr})...`}
                    style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 12px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const, marginBottom: 8 }} />
                  <button onClick={() => addDailyLog(u.id)} disabled={!newLogText.trim()}
                    style={{ background: newLogText.trim() ? "#2A241C" : "#E4DED3", color: newLogText.trim() ? "#F5B944" : "#A39B8E", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: newLogText.trim() ? "pointer" : "default", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar registo de hoje
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                  {(u.dailyLogs || []).map((log, idx) => {
                    const editable = isLogEditable(u.id, idx, log.date);
                    const isEditing = editingLogIdx === idx;
                    return (
                      <div key={idx} style={{ background: "#FFFFFF", borderRadius: 12, padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#3A5A70" }}>
                            {log.date}{log.date === todayStr ? " (hoje)" : ""}
                            {!editable && <span style={{ marginLeft: 5 }}>🔒</span>}
                          </span>
                          <div style={{ display: "flex", gap: 6 }}>
                            {isEditing ? (
                              <>
                                <button onClick={() => saveEditedLog(u.id, idx)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#3B6D11", fontSize: 14, fontWeight: 700 }}>✓</button>
                                <button onClick={() => { setEditingLogIdx(null); setEditingLogText(""); }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC" }}>✕</button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => { if (editable || requestUnlock(u.id, idx)) { setEditingLogIdx(idx); setEditingLogText(log.text); } }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#8A6A2E", fontSize: 13 }}>✏️</button>
                                <button onClick={() => printDailyLog(u, log)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#8A6A2E", fontSize: 13 }}>🖨️</button>
                                <button onClick={() => {
                                  const input = document.createElement("input"); input.type = "file";
                                  input.onchange = async (ev: Event) => {
                                    const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                                    const url = await uploadUtenteDoc(u.id + "_logs", file);
                                    if (!url) { alert("❌ Erro ao fazer upload."); return; }
                                    setUtentes((prev) => prev.map((uu) => {
                                      if (uu.id !== u.id) return uu;
                                      const logs = [...(uu.dailyLogs || [])];
                                      logs[idx] = { ...logs[idx], attachments: [...(logs[idx].attachments || []), { name: file.name, url, type: file.type }] };
                                      const updated = { ...uu, dailyLogs: logs };
                                      if (openUtente?.id === u.id) setOpenUtente(updated);
                                      return updated;
                                    }));
                                  };
                                  document.body.appendChild(input); input.click(); document.body.removeChild(input);
                                }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#3A5A70", fontSize: 13 }} title="Adicionar foto/documento">📎</button>
                                <button onClick={() => { if (!editable && !requestUnlock(u.id, idx)) return; if (!window.confirm("Remover este registo?")) return; setUtentes((prev) => prev.map((uu) => { if (uu.id !== u.id) return uu; const updated = { ...uu, dailyLogs: (uu.dailyLogs || []).filter((_, i) => i !== idx) }; if (openUtente?.id === u.id) setOpenUtente(updated); return updated; })); }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 12 }}>🗑️</button>
                              </>
                            )}
                          </div>
                        </div>
                        {isEditing
                          ? <textarea rows={3} value={editingLogText} onChange={(e) => setEditingLogText(e.target.value)} autoFocus style={{ width: "100%", border: "1px solid #B8CCE0", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical" as const, boxSizing: "border-box" as const }} />
                          : <div style={{ fontSize: 14, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.6 }}>{log.text}</div>
                        }
                        {/* Fotos do dia */}
                        <div style={{ marginTop: 8 }}>
                          {(log.photos || []).length > 0 && (
                            <>
                              <div style={{ fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>📷 Fotos</div>
                              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                                {log.photos!.map((photo, pi) => (
                                  <div key={pi} style={{ position: "relative" as const }}>
                                    <a href={photo.url} target="_blank" rel="noopener noreferrer">
                                      <img src={photo.url} alt="" style={{ width: 80, height: 80, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} />
                                    </a>
                                    <button onClick={() => {
                                      setUtentes((prev) => prev.map((uu) => {
                                        if (uu.id !== u.id) return uu;
                                        const logs = [...(uu.dailyLogs || [])];
                                        logs[idx] = { ...logs[idx], photos: (logs[idx].photos || []).filter((_, i) => i !== pi) };
                                        const updated = { ...uu, dailyLogs: logs };
                                        if (openUtente?.id === u.id) setOpenUtente(updated);
                                        return updated;
                                      }));
                                    }} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                          <button onClick={async () => {
                            const input = document.createElement("input"); input.type = "file"; input.accept = "image/*";
                            input.onchange = async (ev: Event) => {
                              const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                              const url = await uploadUtenteDoc(u.id + "_log_" + log.date.replace(/\//g, "-"), file);
                              if (!url) { alert("❌ Erro ao fazer upload."); return; }
                              setUtentes((prev) => prev.map((uu) => {
                                if (uu.id !== u.id) return uu;
                                const logs = [...(uu.dailyLogs || [])];
                                logs[idx] = { ...logs[idx], photos: [...(logs[idx].photos || []), { url, uploadedAt: new Date().toISOString() }] };
                                const updated = { ...uu, dailyLogs: logs };
                                if (openUtente?.id === u.id) setOpenUtente(updated);
                                return updated;
                              }));
                            };
                            document.body.appendChild(input); input.click(); document.body.removeChild(input);
                          }} style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "none", cursor: "pointer", color: "#3A5A70", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                            📷 {(log.photos || []).length > 0 ? "+ Adicionar foto" : "Adicionar fotos do dia"}
                          </button>
                        </div>
                        {/* Documentos/anexos */}
                        {(log.attachments || []).length > 0 && (
                          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                            {log.attachments!.map((att, ai) => (
                              <div key={ai} style={{ position: "relative" as const }}>
                                {att.type.startsWith("image/")
                                  ? <a href={att.url} target="_blank" rel="noopener noreferrer">
                                      <img src={att.url} alt={att.name} style={{ width: 80, height: 80, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} />
                                    </a>
                                  : <a href={att.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F5F0", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: "#3A5A70", textDecoration: "none" }}>
                                      📄 {att.name}
                                    </a>
                                }
                                <button onClick={() => {
                                  setUtentes((prev) => prev.map((uu) => {
                                    if (uu.id !== u.id) return uu;
                                    const logs = [...(uu.dailyLogs || [])];
                                    logs[idx] = { ...logs[idx], attachments: (logs[idx].attachments || []).filter((_, i) => i !== ai) };
                                    const updated = { ...uu, dailyLogs: logs };
                                    if (openUtente?.id === u.id) setOpenUtente(updated);
                                    return updated;
                                  }));
                                }} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Documentos da aba Registo */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>📎 Documentos do Registo</div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 10 }}>
                    {(u.attachmentsRegisto || []).map((att, ai) => (
                      <div key={ai} style={{ position: "relative" as const }}>
                        {att.type.startsWith("image/")
                          ? <a href={att.url} target="_blank" rel="noopener noreferrer"><img src={att.url} alt={att.name} style={{ width: 72, height: 72, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} /></a>
                          : <a href={att.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F5F0", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: "#3A5A70", textDecoration: "none" }}>📄 {att.name}</a>
                        }
                        <button onClick={() => updateUtente(u.id, { attachmentsRegisto: (u.attachmentsRegisto || []).filter((_, i) => i !== ai) })} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => {
                    const input = document.createElement("input"); input.type = "file";
                    input.onchange = async (ev: Event) => {
                      const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                      const url = await uploadUtenteDoc(u.id + "_registo", file);
                      if (url) updateUtente(u.id, { attachmentsRegisto: [...(u.attachmentsRegisto || []), { name: file.name, url, type: file.type }] });
                    };
                    document.body.appendChild(input); input.click(); document.body.removeChild(input);
                  }} style={{ background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar documento
                  </button>
                </div>
              </div>
            )}
            {utenteTab === "medicacao" && (
              <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {(u.medications || []).map((med) => (
                  <div key={med.id} style={{ display: "flex", alignItems: "center", gap: 10, background: "#FFFFFF", borderRadius: 10, padding: "12px 14px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#2A241C" }}>{med.name}</span>
                      {med.dose && <span style={{ fontSize: 13, color: "#6B6358" }}> · {med.dose}</span>}
                      {med.schedule && <span style={{ fontSize: 13, color: "#8A6A2E" }}> · {med.schedule}</span>}
                    </div>
                    <button onClick={() => removeMedication(u.id, med.id)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 14 }}>✕</button>
                  </div>
                ))}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8, marginBottom: 8 }}>
                    <input value={newMedName} onChange={(e) => setNewMedName(e.target.value)} placeholder="Medicamento" style={{ border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                    <input value={newMedDose} onChange={(e) => setNewMedDose(e.target.value)} placeholder="Dose" style={{ border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input value={newMedSchedule} onChange={(e) => setNewMedSchedule(e.target.value)} placeholder="Horário (ex: 8h, 13h, 20h)" style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                    <button onClick={() => addMedication(u.id)} disabled={!newMedName.trim()} style={{ background: newMedName.trim() ? "#2A241C" : "#E4DED3", color: newMedName.trim() ? "#F5B944" : "#A39B8E", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: newMedName.trim() ? "pointer" : "default", fontFamily: "'Inter', sans-serif" }}>+ Adicionar</button>
                  </div>
                </div>
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Notas adicionais</label>
                  <textarea rows={3} value={u.medicationNotes || ""} onChange={(e) => updateUtente(u.id, { medicationNotes: e.target.value })} placeholder="Notas sobre medicação..." style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }} />
                </div>

                {/* Documentos da aba Medicação */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>📎 Documentos</div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 10 }}>
                    {(u.attachmentsMed || []).map((att, ai) => (
                      <div key={ai} style={{ position: "relative" as const }}>
                        {att.type.startsWith("image/")
                          ? <a href={att.url} target="_blank" rel="noopener noreferrer"><img src={att.url} alt={att.name} style={{ width: 72, height: 72, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} /></a>
                          : <a href={att.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F5F0", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: "#3A5A70", textDecoration: "none" }}>📄 {att.name}</a>
                        }
                        <button onClick={() => updateUtente(u.id, { attachmentsMed: (u.attachmentsMed || []).filter((_, i) => i !== ai) })} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => {
                    const input = document.createElement("input"); input.type = "file";
                    input.onchange = async (ev: Event) => {
                      const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                      const url = await uploadUtenteDoc(u.id + "_med", file);
                      if (url) updateUtente(u.id, { attachmentsMed: [...(u.attachmentsMed || []), { name: file.name, url, type: file.type }] });
                    };
                    document.body.appendChild(input); input.click(); document.body.removeChild(input);
                  }} style={{ background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar documento
                  </button>
                </div>
              </div>
            )}

            {/* ── CUIDADOS ── */}
            {utenteTab === "cuidados" && (
              <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 14 }}>
                {[
                  { key: "hygieneNotes", label: "🧼 Cuidados de Higiene", placeholder: "Rotina de higiene, banho assistido, cuidados especiais..." },
                  { key: "feedingNotes", label: "🍽️ Alimentação", placeholder: "Restrições alimentares, alergias, dieta especial, apetite..." },
                  { key: "otherNotes", label: "📌 Outros", placeholder: "Outras informações relevantes..." },
                ].map(({ key, label, placeholder }) => (
                  <div key={key} style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                    <textarea rows={4} value={(u as any)[key] || ""} onChange={(e) => updateUtente(u.id, { [key]: e.target.value })} placeholder={placeholder}
                      style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "9px 12px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }} />
                  </div>
                ))}

                {/* Documentos da aba Cuidados */}
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 10 }}>📎 Documentos</div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 10 }}>
                    {(u.attachmentsCuidados || []).map((att, ai) => (
                      <div key={ai} style={{ position: "relative" as const }}>
                        {att.type.startsWith("image/")
                          ? <a href={att.url} target="_blank" rel="noopener noreferrer"><img src={att.url} alt={att.name} style={{ width: 72, height: 72, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} /></a>
                          : <a href={att.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F5F0", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: "#3A5A70", textDecoration: "none" }}>📄 {att.name}</a>
                        }
                        <button onClick={() => updateUtente(u.id, { attachmentsCuidados: (u.attachmentsCuidados || []).filter((_, i) => i !== ai) })} style={{ position: "absolute" as const, top: -6, right: -6, background: "#C2554A", color: "white", border: "none", borderRadius: "50%", width: 18, height: 18, fontSize: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => {
                    const input = document.createElement("input"); input.type = "file";
                    input.onchange = async (ev: Event) => {
                      const file = (ev.target as HTMLInputElement).files?.[0]; if (!file) return;
                      const url = await uploadUtenteDoc(u.id + "_cuidados", file);
                      if (url) updateUtente(u.id, { attachmentsCuidados: [...(u.attachmentsCuidados || []), { name: file.name, url, type: file.type }] });
                    };
                    document.body.appendChild(input); input.click(); document.body.removeChild(input);
                  }} style={{ background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                    + Adicionar documento
                  </button>
                </div>
              </div>
            )}

            {/* ── PIC ── */}
            {utenteTab === "pic" && (
              <div style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", paddingTop: 40, gap: 16, textAlign: "center" as const }}>
                <div style={{ fontSize: 56 }}>📋</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#2A241C" }}>Plano Individual de Cuidados</div>
                <div style={{ fontSize: 14, color: "#6B6358", lineHeight: 1.6, maxWidth: 360 }}>
                  Gera o PIC com todos os dados já preenchidos automaticamente a partir da informação disponível na ficha do utente.
                </div>
                <button onClick={() => handleGeneratePIC(u)} style={{ background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 12, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif", marginTop: 8 }}>
                  📋 Gerar PIC
                </button>
                {u.picData && Object.keys(u.picData).length > 0 && (
                  <div style={{ fontSize: 12, color: "#3B6D11", background: "#E8F0E8", borderRadius: 8, padding: "8px 16px" }}>
                    ✅ Tem dados guardados do último PIC
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      ); })()}

      {/* Modal de dados do Cartão de Cidadão */}
      {showCCPanel && (() => {
        const ccUtente = utentes.find((u) => u.id === showCCPanel);
        if (!ccUtente) return null;
        const ccFields: { key: keyof Utente; label: string; placeholder: string }[] = [
          { key: "ccNumber", label: "Número do Cartão de Cidadão", placeholder: "Ex: 12345678 9 ZZ0" },
          { key: "ccValidity", label: "Validade do CC", placeholder: "DD/MM/AAAA" },
          { key: "nif", label: "NIF", placeholder: "Ex: 123456789" },
          { key: "birthDate", label: "Data de nascimento", placeholder: "DD/MM/AAAA" },
          { key: "naturalidade", label: "Naturalidade", placeholder: "Ex: Vila Nova de Gaia" },
          { key: "nacionalidade", label: "Nacionalidade", placeholder: "Ex: Portuguesa" },
          { key: "estadoCivil", label: "Estado civil", placeholder: "Ex: Viúvo(a)" },
          { key: "morada", label: "Morada", placeholder: "Endereço completo" },
          { key: "entryDate", label: "Data de entrada no lar", placeholder: "DD/MM/AAAA" },
          { key: "familyContact", label: "Contacto familiar (nome)", placeholder: "Ex: João Silva (filho)" },
          { key: "familyPhone", label: "Contacto familiar (telefone)", placeholder: "Ex: 912 345 678" },
        ];
        return (
          <>
            <div style={{ position: "fixed" as const, inset: 0, background: "rgba(20,18,14,0.5)", zIndex: 250 }} onClick={() => setShowCCPanel(null)} />
            <div style={{
              position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(480px, 92vw)", maxHeight: "85vh", overflowY: "auto" as const,
              background: "#FFFFFF", borderRadius: 20, zIndex: 251, boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}>
              <div style={{ padding: "20px 24px", background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>📇 Ficha do Utente</div>
                  <div style={{ fontSize: 12, color: "#3A5A70" }}>{ccUtente.name} — Dados do Cartão de Cidadão</div>
                </div>
                <button onClick={() => setShowCCPanel(null)} style={{ border: "none", background: "rgba(255,255,255,0.6)", borderRadius: 10, padding: 8, cursor: "pointer", color: "#2A241C" }}>
                  <IconX size={18} />
                </button>
              </div>
              <div style={{ padding: 24 }}>
                {ccFields.map((f) => (
                  <div key={f.key as string} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#6B6358", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{f.label}</label>
                    <input
                      type="text"
                      value={(ccUtente as any)[f.key] || ""}
                      onChange={(e) => updateUtente(ccUtente.id, { [f.key]: e.target.value } as Partial<Utente>)}
                      placeholder={f.placeholder}
                      style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const }}
                    />
                  </div>
                ))}
                <button onClick={() => setShowCCPanel(null)} style={{ width: "100%", background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif", marginTop: 8 }}>
                  Fechar
                </button>
              </div>
            </div>
          </>
        );
      })()}

      {/* Modal de link de família — campo selecionável, sem depender de clipboard API */}
      {familyLinkModal && (
        <>
          <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.4)", zIndex: 200 }} onClick={() => setFamilyLinkModal(null)} />
          <div style={{ position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(440px, 92vw)", background: "#FFFFFF", borderRadius: 20, zIndex: 201, boxShadow: "0 20px 60px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", background: "#E8EEF5", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 26 }}>🔗</span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>Link de Família</div>
                <div style={{ fontSize: 12, color: "#3A5A70" }}>{familyLinkModal.name}</div>
              </div>
            </div>
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.6, margin: "0 0 14px" }}>
                Toque no campo abaixo para selecionar tudo, depois copie (Ctrl+C ou Cmd+C) e partilhe com a família.
              </p>
              <input
                readOnly
                value={familyLinkModal.link}
                onFocus={(e) => e.target.select()}
                onClick={(e) => (e.target as HTMLInputElement).select()}
                style={{ width: "100%", border: "1px solid #B8CCE0", borderRadius: 10, padding: "12px 14px", fontSize: 13, fontFamily: "monospace", outline: "none", background: "#F7F9FB", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 16 }}
              />
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => {
                    const input = document.querySelector('input[readonly]') as HTMLInputElement;
                    if (input) { input.select(); document.execCommand("copy"); alert("✅ Link copiado!"); }
                  }}
                  style={{ flex: 1, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                >
                  Copiar link
                </button>
                <button onClick={() => setFamilyLinkModal(null)} style={{ flex: 1, background: "transparent", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================

// ============================================================
// PAINEL DE PESQUISA RÁPIDA — detalhe de colaborador ou utente
// ============================================================
const MONTH_NAMES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const TURNO_LABELS: Record<string, string> = {
  M: "Manhã (07h-16h)", T: "Tarde", N: "Noite",
  FC: "Folga compensatória", FO: "Folga obrigatória",
  FE: "Férias", FR: "Feriado", BM: "Baixa médica", EX: "Falta injustificada", FA: "Falta",
};

// ============================================================
// Componente que troca de palavra a cada ciclo (efeito flutuante)
// ============================================================
// ============================================================
// PÁGINA PÚBLICA DA FAMÍLIA — acesso via link individual
// ============================================================
function FamilyPage({ code }: { code: string }) {
  const [utente, setUtente] = useState<Utente | null | "not_found">(null);
  const [ementa, setEmenta] = useState<{ url: string; type: string; uploadedAt: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedFamilyDay, setSelectedFamilyDay] = useState<string | null>(null);

  // Impedir cache do browser para esta página — garante que a família vê sempre a versão mais recente
  useEffect(() => {
    const metaTags = [
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" },
    ];
    const created: HTMLMetaElement[] = [];
    metaTags.forEach(({ httpEquiv, content }) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = httpEquiv;
      meta.content = content;
      document.head.appendChild(meta);
      created.push(meta);
    });
    return () => { created.forEach((m) => m.remove()); };
  }, []);

  useEffect(() => {
    Promise.all([
      loadFromSupabase("utentes_data"),
      loadFromSupabase("ementa_data"),
    ]).then(([utentesRow, ementaRow]) => {
      const utentes = utentesRow?.utentes ?? [];
      const found = utentes.find((u: any) => u.familyCode === code);
      setUtente(found || "not_found");
      if (ementaRow?.ementa?.url) setEmenta(ementaRow.ementa);
      // Definir mês inicial como o mês do registo mais recente, se existir
      if (found?.dailyLogs?.length) {
        const parseDate = (d: string) => {
          const [day, mo, yr] = d.split("/").map(Number);
          return new Date(yr, mo - 1, day);
        };
        const mostRecent = found.dailyLogs.reduce((latest: Date, log: any) => {
          const d = parseDate(log.date);
          return d > latest ? d : latest;
        }, parseDate(found.dailyLogs[0].date));
        setYear(mostRecent.getFullYear());
        setMonth(mostRecent.getMonth());
      }
      setLoading(false);
    }).catch(() => {
      setUtente("not_found");
      setLoading(false);
    });
  }, [code]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ textAlign: "center" as const, color: "#3A5A70" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <div>A carregar informação...</div>
        </div>
      </div>
    );
  }

  if (utente === "not_found" || !utente) {
    return (
      <div style={{ minHeight: "100vh", background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", padding: 24 }}>
        <div style={{ textAlign: "center" as const, color: "#3A5A70", maxWidth: 360 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Link inválido ou expirado</div>
          <div style={{ fontSize: 13, color: "#6B6358" }}>Contacte o lar para obter um novo link de acesso.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#E8EEF5", fontFamily: "'Inter', sans-serif", paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ background: "#2A241C", padding: "28px 20px", display: "flex", alignItems: "center", gap: 16, color: "#FFFFFF" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#3A5A70", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
          {utente.photo ? <img src={utente.photo} alt={utente.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : utente.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700 }}>{utente.name}</div>
          <div style={{ fontSize: 12, color: "#C9C2B5" }}>Associação Oliveirense de Socorros Mútuos</div>
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "24px 20px" }}>
        {/* Dados básicos */}
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 14 }}>Informação Geral</div>
          {[
            { label: "Quarto", value: utente.room },
            { label: "Data de nascimento", value: utente.birthDate },
            { label: "Data de entrada", value: utente.entryDate },
          ].filter((f) => f.value).map((f) => (
            <div key={f.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F0EDE6" }}>
              <span style={{ fontSize: 13, color: "#6B6358" }}>{f.label}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2A241C" }}>{f.value}</span>
            </div>
          ))}
        </div>

        {/* Registo do dia — calendário interativo (mostra sempre, mesmo sem registos) */}
        {(() => {
          const logsByDate: Record<string, { date: string; text: string; photos?: { url: string; uploadedAt: string }[]; attachments?: { name: string; url: string; type: string }[] }> = {};
          (utente.dailyLogs || []).forEach((log) => { logsByDate[log.date] = log; });
          const numDaysF = new Date(year, month + 1, 0).getDate();
          const firstDayOfWeekF = new Date(year, month, 1).getDay();
          const todayStrF = today.toLocaleDateString("pt-PT");
          const selectedLog = selectedFamilyDay ? logsByDate[selectedFamilyDay] : null;
          const weekdayColors = ["#C2554A", "#5B8DBE", "#3B6D11", "#B08A4E", "#7E57C2", "#3A8A8A", "#C2554A"];

          return (
            <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 12 }}>📝 Registo do Dia — toque num dia para ver</div>

              {/* Cabeçalho dias da semana */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
                {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                  <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: weekdayColors[i] + "1F", color: weekdayColors[i], fontSize: 9, fontWeight: 800 }}>{d}</div>
                ))}
              </div>

              {/* Grelha do calendário */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 14 }}>
                {Array.from({ length: firstDayOfWeekF }, (_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: numDaysF }, (_, i) => i + 1).map((day) => {
                  const dateObj = new Date(year, month, day);
                  const dateStr = dateObj.toLocaleDateString("pt-PT");
                  const hasLog = !!logsByDate[dateStr];
                  const isSelected = selectedFamilyDay === dateStr;
                  const isToday = dateStr === todayStrF;
                  return (
                    <button
                      key={day}
                      onClick={() => hasLog && setSelectedFamilyDay(isSelected ? null : dateStr)}
                      style={{
                        aspectRatio: "1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: hasLog ? 700 : 400, cursor: hasLog ? "pointer" : "default",
                        background: isSelected ? "#3A5A70" : hasLog ? "#E8EEF5" : "#FAFAF8",
                        color: isSelected ? "#FFFFFF" : hasLog ? "#3A5A70" : "#C2BAAC",
                        border: isToday ? "2px solid #5B8DBE" : "1px solid #EFEAE2",
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Navegação de mês */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <button onClick={() => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); setSelectedFamilyDay(null); }} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#3A5A70", display: "flex", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#6B6358" }}>{MONTH_NAMES_FULL[month]} {year}</span>
                <button onClick={() => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); setSelectedFamilyDay(null); }} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#3A5A70", display: "flex", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              {/* Modal de visualização do registo selecionado */}
              {selectedLog && (
                <>
                  <div style={{ position: "fixed" as const, inset: 0, background: "rgba(20,18,14,0.55)", zIndex: 300 }} onClick={() => setSelectedFamilyDay(null)} />
                  <div style={{
                    position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    width: "min(440px, 90vw)", maxHeight: "75vh", overflowY: "auto" as const,
                    background: "#FFFFFF", borderRadius: 20, zIndex: 301, boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                  }}>
                    <div style={{ padding: "18px 22px", background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: "#2A241C" }}>{utente.name}</div>
                        <div style={{ fontSize: 12, color: "#3A5A70", fontWeight: 600 }}>{selectedLog.date}</div>
                      </div>
                      <button onClick={() => setSelectedFamilyDay(null)} style={{ border: "none", background: "rgba(255,255,255,0.6)", borderRadius: 10, padding: 8, cursor: "pointer", color: "#2A241C" }}>
                        <IconX size={18} />
                      </button>
                    </div>
                    <div style={{ padding: 20 }}>
                      {selectedLog.text && (
                        <div style={{ marginBottom: 16 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 8 }}>📝 Registo</div>
                          <div style={{ fontSize: 14, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.7, background: "#F7F5F0", borderRadius: 12, padding: 16 }}>
                            {selectedLog.text}
                          </div>
                        </div>
                      )}
                      {(selectedLog.photos || []).length > 0 && (
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 8 }}>📷 Fotos</div>
                          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                            {selectedLog.photos!.map((photo, pi) => (
                              <a key={pi} href={photo.url} target="_blank" rel="noopener noreferrer">
                                <img src={photo.url} alt="" style={{ width: 90, height: 90, objectFit: "cover" as const, borderRadius: 10, border: "1px solid #E4DED3" }} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })()}

        {/* Documentos */}
        {(utente.filesFamily?.length ?? 0) > 0 && (
          <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 10 }}>📎 Documentos</div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
              {utente.filesFamily!.map((f, i) => (
                f.type.startsWith("image/")
                  ? <a key={i} href={f.url} target="_blank" rel="noopener noreferrer"><img src={f.url} alt={f.name} style={{ width: 80, height: 80, objectFit: "cover" as const, borderRadius: 8, border: "1px solid #E4DED3" }} /></a>
                  : <a key={i} href={f.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3A5A70", textDecoration: "none", background: "#F7F5F0", borderRadius: 8, padding: "8px 12px" }}>📄 {f.name}</a>
              ))}
            </div>
          </div>
        )}

        {/* Ementa semanal */}
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 10 }}>🍽️ Ementa da Semana</div>
          {ementa ? (
            ementa.type.startsWith("image/") ? (
              <img src={ementa.url} alt="Ementa da semana" style={{ width: "100%", borderRadius: 10, border: "1px solid #E4DED3" }} />
            ) : (
              <a href={ementa.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3A5A70", textDecoration: "none", background: "#F7F5F0", borderRadius: 8, padding: "10px 14px" }}>
                📄 Ver ementa da semana (PDF)
              </a>
            )
          ) : (
            <div style={{ fontSize: 13, color: "#A39B8E", textAlign: "center" as const, padding: "16px 0" }}>Ementa ainda não disponível.</div>
          )}
        </div>

        <div style={{ textAlign: "center" as const, fontSize: 11, color: "#A39B8E", marginTop: 24 }}>
          Esta página é de acesso restrito e exclusivo para familiares.
        </div>
      </div>
    </div>
  );
}

function FloatingWordCycler({ words, interval, delay = 0 }: { words: string[]; interval: number; delay?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Espera o delay inicial + a duração de um ciclo completo antes de trocar,
    // para a troca acontecer sempre que opacity está em 0 (início do próximo ciclo)
    const startTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, interval);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [words.length, interval, delay]);

  return <>{words[index]}</>;
}

function QuickSearchPanel({ target, schedule, onClose }: {
  target: { type: "utente" | "colaborador"; name: string; photo?: string };
  schedule: Record<string, Record<string, Record<number, string>>>;
  onClose: () => void;
}) {
  const today = new Date();

  // Encontrar o mês mais recente com dados para este colaborador
  const findInitialMonth = (): [number, number] => {
    if (target.type !== "colaborador") return [today.getFullYear(), today.getMonth()];
    const targetLower = target.name.trim().toLowerCase();
    const keysWithData = Object.keys(schedule || {})
      .filter((k) => {
        const monthData = schedule[k] || {};
        const matchedKey = Object.keys(monthData).find((name) => name.trim().toLowerCase() === targetLower);
        return matchedKey && Object.keys(monthData[matchedKey]).length > 0;
      })
      .sort()
      .reverse();
    if (keysWithData.length > 0) {
      const [y, m] = keysWithData[0].split("-").map(Number);
      return [y, m - 1];
    }
    return [today.getFullYear(), today.getMonth()];
  };

  const [initialYear, initialMonth] = findInitialMonth();
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [utenteData, setUtenteData] = useState<any>(null);
  const [selectedLogDay, setSelectedLogDay] = useState<string | null>(null);

  useEffect(() => {
    if (target.type === "utente") {
      const stored = loadUtentesData()?.utentes ?? [];
      const found = stored.find((u: any) => u.name === target.name);
      setUtenteData(found || null);
    }
  }, [target]);

  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const monthData = schedule?.[monthKey] || {};
  // Procurar o nome de forma tolerante (espaços, maiúsculas/minúsculas)
  const matchedKey = Object.keys(monthData).find(
    (k) => k.trim().toLowerCase() === target.name.trim().toLowerCase()
  );
  const monthSchedule = matchedKey ? monthData[matchedKey] : (monthData[target.name] || {});
  const numDays = new Date(year, month + 1, 0).getDate();

  const summary: Record<string, number> = {};
  Object.values(monthSchedule).forEach((t) => {
    if (t) summary[t] = (summary[t] || 0) + 1;
  });

  const WEEKDAY_LETTERS = ["D", "S", "T", "Q", "Q", "S", "S"];
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=domingo

  // ---------- Gerar PDF ----------
  const handleExportPDF = () => {
    let html = "";
    const today2 = new Date().toLocaleDateString("pt-PT");

    if (target.type === "utente") {
      const rows = [
        { label: "Data de nascimento", value: utenteData?.birthDate },
        { label: "Quarto", value: utenteData?.room },
        { label: "Data de entrada", value: utenteData?.entryDate },
        { label: "Contacto familiar", value: utenteData?.familyContact },
        { label: "Telefone familiar", value: utenteData?.familyPhone },
      ].filter((f) => f.value);

      html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Ficha — ${target.name}</title>
      <style>
        @page { size: A4; margin: 18mm; }
        body { font-family: Arial, sans-serif; color: #2A241C; }
        h1 { font-size: 20px; margin: 0 0 4px; }
        .sub { font-size: 12px; color: #888; margin: 0 0 20px; }
        .row { display: flex; padding: 8px 0; border-bottom: 1px solid #E4DED3; }
        .label { width: 180px; font-size: 11px; font-weight: bold; color: #6B6358; text-transform: uppercase; }
        .value { flex: 1; font-size: 13px; }
        .notes-box { background: #F7F5F0; border-radius: 8px; padding: 14px; margin-top: 16px; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }
        .section-title { font-size: 11px; font-weight: bold; color: #6B6358; text-transform: uppercase; margin: 20px 0 6px; }
      </style></head><body>
      <h1>Ficha de Utente — ${target.name}</h1>
      <p class="sub">Gerado em ${today2} · Associação Oliveirense de Socorros Mútuos</p>
      ${rows.map((r) => `<div class="row"><div class="label">${r.label}</div><div class="value">${r.value}</div></div>`).join("")}
      ${(utenteData?.dailyLogs?.length ?? 0) > 0 ? `<div class="section-title">Registo do Dia</div>${utenteData.dailyLogs.map((log: any) => `<div class="notes-box"><strong>${log.date}</strong><br>${log.text.replace(/\n/g, "<br>")}</div>`).join("")}` : ""}
      </body></html>`;
    } else {
      const days = Array.from({ length: numDays }, (_, i) => i + 1);
      const rows = days.map((day) => {
        const turno = monthSchedule[day] || "—";
        const date = new Date(year, month, day);
        const wd = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][date.getDay()];
        return `<tr><td>${day}</td><td>${wd}</td><td><strong>${turno}</strong></td><td>${TURNO_LABELS[turno] || ""}</td></tr>`;
      }).join("");

      const summaryHtml = Object.entries(summary).map(([t, c]) => `<span class="badge">${TURNO_LABELS[t] || t}: <strong>${c}</strong></span>`).join(" ");

      html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Horário — ${target.name}</title>
      <style>
        @page { size: A4; margin: 18mm; }
        body { font-family: Arial, sans-serif; color: #2A241C; }
        h1 { font-size: 20px; margin: 0 0 4px; }
        .sub { font-size: 12px; color: #888; margin: 0 0 16px; }
        .badge { display: inline-block; background: #F0E8D5; border-radius: 14px; padding: 4px 12px; font-size: 11px; margin: 0 6px 6px 0; }
        table { width: 100%; border-collapse: collapse; margin-top: 14px; }
        th { background: #2A241C; color: #fff; padding: 6px 10px; text-align: left; font-size: 11px; }
        td { padding: 6px 10px; border-bottom: 1px solid #E4DED3; font-size: 12px; }
        tr:nth-child(even) { background: #FAFAF8; }
      </style></head><body>
      <h1>Horário — ${target.name}</h1>
      <p class="sub">${MONTH_NAMES_FULL[month]} ${year} · Gerado em ${today2} · Associação Oliveirense de Socorros Mútuos</p>
      <div>${summaryHtml}</div>
      <table><thead><tr><th>Dia</th><th>Sem.</th><th>Turno</th><th>Descrição</th></tr></thead><tbody>${rows}</tbody></table>
      </body></html>`;
    }

    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
    w.document.open(); w.document.write(html); w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  return (
    <>
      <div style={{ position: "fixed" as const, inset: 0, background: "rgba(20,18,14,0.5)", zIndex: 200 }} onClick={onClose} />
      <div style={{
        position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "min(520px, 92vw)", maxHeight: "85vh", overflowY: "auto" as const,
        background: "#FFFFFF", borderRadius: 24, zIndex: 201, boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}>
        {/* Header */}
        <div style={{
          padding: "24px 24px 20px", display: "flex", alignItems: "center", gap: 14,
          background: target.type === "utente" ? "#E8EEF5" : "#F0E8D5",
          borderRadius: "24px 24px 0 0",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", flexShrink: 0, overflow: "hidden",
            background: target.type === "utente" ? "#3A5A70" : "#B08A4E",
            color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
          }}>
            {target.photo ? <img src={target.photo} alt={target.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : target.name.slice(0, 2).toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: "#2A241C" }}>{target.name}</div>
            <div style={{ fontSize: 12, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.05em", fontWeight: 600 }}>
              {target.type === "utente" ? "Utente" : "Colaborador"}
            </div>
          </div>
          {target.type !== "utente" && (
            <button onClick={handleExportPDF} style={{ border: "none", background: "rgba(255,255,255,0.6)", borderRadius: 10, padding: 8, cursor: "pointer", color: "#2A241C", display: "flex", alignItems: "center" }} title="Exportar PDF">
              <IconPrinter size={18} />
            </button>
          )}
          <button onClick={onClose} style={{ border: "none", background: "rgba(255,255,255,0.5)", borderRadius: 10, padding: 8, cursor: "pointer", color: "#2A241C" }}>
            <IconX size={18} />
          </button>
        </div>

        <div style={{ padding: 24 }}>
          {target.type === "utente" ? (
            // ---------- Informação de utente ----------
            utenteData ? (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                {[
                  { label: "Data de nascimento", value: utenteData.birthDate },
                  { label: "Quarto", value: utenteData.room },
                  { label: "Data de entrada", value: utenteData.entryDate },
                  { label: "Contacto familiar", value: utenteData.familyContact },
                  { label: "Telefone familiar", value: utenteData.familyPhone },
                ].filter((f) => f.value).map((f) => (
                  <div key={f.label}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 3 }}>{f.label}</div>
                    <div style={{ fontSize: 14, color: "#2A241C" }}>{f.value}</div>
                  </div>
                ))}
                {(utenteData.dailyLogs?.length ?? 0) > 0 && (() => {
                  // Criar mapa rápido data -> log
                  const logsByDate: Record<string, { date: string; text: string; photos?: { url: string; uploadedAt: string }[]; attachments?: { name: string; url: string; type: string }[] }> = {};
                  utenteData.dailyLogs.forEach((log: any) => { logsByDate[log.date] = log; });

                  const numDaysU = new Date(year, month + 1, 0).getDate();
                  const firstDayOfWeekU = new Date(year, month, 1).getDay();
                  const selectedLog = selectedLogDay ? logsByDate[selectedLogDay] : null;

                  const printLog = (log: { date: string; text: string }) => {
                    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Registo — ${target.name} — ${log.date}</title>
                    <style>@page{size:A4;margin:20mm}body{font-family:Arial,sans-serif;color:#2A241C}h1{font-size:18px;margin:0 0 4px}.sub{font-size:12px;color:#888;margin:0 0 20px}.date-badge{display:inline-block;background:#2A241C;color:#F5B944;border-radius:20px;padding:6px 16px;font-size:13px;font-weight:bold;margin-bottom:16px}.text-box{font-size:14px;line-height:1.8;white-space:pre-wrap;border:1px solid #E4DED3;border-radius:8px;padding:18px}</style>
                    </head><body><h1>Registo do Dia — ${target.name}</h1><p class="sub">Associação Oliveirense de Socorros Mútuos · Gerado em ${new Date().toLocaleDateString("pt-PT")}</p><div class="date-badge">${log.date}</div><div class="text-box">${log.text.replace(/\n/g, "<br>")}</div></body></html>`;
                    const w = window.open("", "_blank");
                    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
                    w.document.open(); w.document.write(html); w.document.close();
                    w.focus(); setTimeout(() => w.print(), 300);
                  };

                  return (
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 10 }}>📝 Registo do Dia — clique num dia para ver</div>

                      {/* Cabeçalho dias da semana */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
                        {WEEKDAY_LETTERS.map((d, i) => {
                          const colors = ["#C2554A", "#5B8DBE", "#3B6D11", "#B08A4E", "#7E57C2", "#3A8A8A", "#C2554A"];
                          return (
                            <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: colors[i] + "1F", color: colors[i], fontSize: 9, fontWeight: 800 }}>{d}</div>
                          );
                        })}
                      </div>

                      {/* Grelha do calendário */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 14 }}>
                        {Array.from({ length: firstDayOfWeekU }, (_, i) => <div key={`e-${i}`} />)}
                        {Array.from({ length: numDaysU }, (_, i) => i + 1).map((day) => {
                          const dateObj = new Date(year, month, day);
                          const dateStr = dateObj.toLocaleDateString("pt-PT");
                          const hasLog = !!logsByDate[dateStr];
                          const isSelected = selectedLogDay === dateStr;
                          const isToday = dateStr === new Date().toLocaleDateString("pt-PT");
                          return (
                            <button
                              key={day}
                              onClick={() => hasLog && setSelectedLogDay(isSelected ? null : dateStr)}
                              style={{
                                aspectRatio: "1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 11, fontWeight: hasLog ? 700 : 400, cursor: hasLog ? "pointer" : "default",
                                background: isSelected ? "#3A5A70" : hasLog ? "#E8EEF5" : "#FAFAF8",
                                color: isSelected ? "#FFFFFF" : hasLog ? "#3A5A70" : "#C2BAAC",
                                border: isToday ? "2px solid #5B8DBE" : "1px solid #EFEAE2",
                              }}
                              title={hasLog ? "Ver registo deste dia" : undefined}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Navegação de mês */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                        <button onClick={() => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); setSelectedLogDay(null); }} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#3A5A70", display: "flex", alignItems: "center" }}><IconChevronLeft size={16} /></button>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#6B6358" }}>{MONTH_NAMES_FULL[month]} {year}</span>
                        <button onClick={() => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); setSelectedLogDay(null); }} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#3A5A70", display: "flex", alignItems: "center" }}><IconChevronRight size={16} /></button>
                      </div>

                      {/* Modal de visualização do registo do dia selecionado */}
                      {selectedLog && (
                        <>
                          <div style={{ position: "fixed" as const, inset: 0, background: "rgba(20,18,14,0.55)", zIndex: 300 }} onClick={() => setSelectedLogDay(null)} />
                          <div style={{
                            position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            width: "min(480px, 92vw)", maxHeight: "80vh", overflowY: "auto" as const,
                            background: "#FFFFFF", borderRadius: 20, zIndex: 301, boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                          }}>
                            <div style={{ padding: "20px 24px", background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <div>
                                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>{target.name}</div>
                                <div style={{ fontSize: 12, color: "#3A5A70", fontWeight: 600 }}>{selectedLog.date}</div>
                              </div>
                              <button onClick={() => setSelectedLogDay(null)} style={{ border: "none", background: "rgba(255,255,255,0.6)", borderRadius: 10, padding: 8, cursor: "pointer", color: "#2A241C" }}>
                                <IconX size={18} />
                              </button>
                            </div>
                            <div style={{ padding: 24 }}>
                              {selectedLog.text && (
                                <div style={{ fontSize: 14, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.7, background: "#F7F5F0", borderRadius: 12, padding: 18, marginBottom: 16 }}>
                                  {selectedLog.text}
                                </div>
                              )}
                              {(selectedLog.photos || []).length > 0 && (
                                <div style={{ marginBottom: 16 }}>
                                  <div style={{ fontSize: 11, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 8 }}>📷 Fotos</div>
                                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                                    {selectedLog.photos!.map((photo: any, pi: number) => (
                                      <a key={pi} href={photo.url} target="_blank" rel="noopener noreferrer">
                                        <img src={photo.url} alt="" style={{ width: 90, height: 90, objectFit: "cover" as const, borderRadius: 10, border: "1px solid #E4DED3" }} />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <div style={{ display: "flex", gap: 10 }}>
                                <button onClick={() => printLog(selectedLog)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                                  🖨️ Imprimir
                                </button>
                                <button onClick={() => printLog(selectedLog)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                                  📄 Guardar PDF
                                </button>
                              </div>
                              <div style={{ fontSize: 11, color: "#A39B8E", textAlign: "center" as const, marginTop: 10 }}>
                                Em "Imprimir" escolha "Guardar como PDF" no destino para criar um ficheiro.
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })()}

                {/* Medicação Diária */}
                {((utenteData.medications?.length ?? 0) > 0 || utenteData.medicationNotes) && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 6 }}>💊 Medicação Diária</div>
                    {(utenteData.medications?.length ?? 0) > 0 && (
                      <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: utenteData.medicationNotes ? 8 : 0 }}>
                        {utenteData.medications.map((med: any) => (
                          <div key={med.id} style={{ background: "#F7F5F0", borderRadius: 8, padding: "8px 10px", fontSize: 13 }}>
                            <span style={{ fontWeight: 600, color: "#2A241C" }}>{med.name}</span>
                            {med.dose && <span style={{ color: "#6B6358" }}> · {med.dose}</span>}
                            {med.schedule && <span style={{ color: "#8A6A2E" }}> · {med.schedule}</span>}
                          </div>
                        ))}
                      </div>
                    )}
                    {utenteData.medicationNotes && (
                      <div style={{ fontSize: 13, color: "#2A241C", whiteSpace: "pre-wrap" as const, background: "#F7F5F0", borderRadius: 8, padding: "8px 10px", lineHeight: 1.5 }}>{utenteData.medicationNotes}</div>
                    )}
                  </div>
                )}

                {/* Cuidados de Higiene */}
                {utenteData.hygieneNotes && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 6 }}>🧼 Cuidados de Higiene</div>
                    <div style={{ fontSize: 13, color: "#2A241C", whiteSpace: "pre-wrap" as const, background: "#F7F5F0", borderRadius: 8, padding: "8px 10px", lineHeight: 1.5 }}>{utenteData.hygieneNotes}</div>
                  </div>
                )}

                {/* Alimentação */}
                {utenteData.feedingNotes && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 6 }}>🍽️ Alimentação</div>
                    <div style={{ fontSize: 13, color: "#2A241C", whiteSpace: "pre-wrap" as const, background: "#F7F5F0", borderRadius: 8, padding: "8px 10px", lineHeight: 1.5 }}>{utenteData.feedingNotes}</div>
                  </div>
                )}

                {/* Outros */}
                {utenteData.otherNotes && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 6 }}>📌 Outros</div>
                    <div style={{ fontSize: 13, color: "#2A241C", whiteSpace: "pre-wrap" as const, background: "#F7F5F0", borderRadius: 8, padding: "8px 10px", lineHeight: 1.5 }}>{utenteData.otherNotes}</div>
                  </div>
                )}

                {(utenteData.files?.length ?? 0) > 0 && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 6 }}>Documentos ({utenteData.files.length})</div>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 5 }}>
                      {utenteData.files.map((f: any, i: number) => (
                        <a key={i} href={f.url || f.data} download={f.name} target={f.url ? "_blank" : undefined} style={{ fontSize: 12, color: "#3A5A70", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                          📎 {f.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center" as const, color: "#A39B8E", fontSize: 13, padding: "20px 0" }}>Sem ficha detalhada guardada para este utente.</div>
            )
          ) : (
            // ---------- Informação de colaborador (horário) ----------
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, background: "#F7F5F0", borderRadius: 12, padding: "8px 8px" }}>
                <button onClick={() => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); }}
                  style={{ border: "none", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", alignItems: "center" }}
                  title="Mês anterior"
                >
                  <IconChevronLeft size={18} />
                </button>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: "#2A241C" }}>{MONTH_NAMES_FULL[month]} {year}</div>
                <button onClick={() => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); }}
                  style={{ border: "none", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", alignItems: "center" }}
                  title="Mês seguinte"
                >
                  <IconChevronRight size={18} />
                </button>
              </div>

              {Object.keys(monthSchedule).length === 0 ? (
                <div style={{ textAlign: "center" as const, color: "#A39B8E", fontSize: 13, padding: "20px 0" }}>Sem turnos registados para este mês.</div>
              ) : (
                <>
                  {/* Resumo do mês */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 16 }}>
                    {Object.entries(summary).map(([turno, count]) => (
                      <div key={turno} style={{ background: "#F0E8D5", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: "#8A6A2E" }}>
                        {TURNO_LABELS[turno] || turno}: <strong>{count}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Cabeçalho dias da semana */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
                    {WEEKDAY_LETTERS.map((d, i) => {
                      const colors = ["#C2554A", "#5B8DBE", "#3B6D11", "#B08A4E", "#7E57C2", "#3A8A8A", "#C2554A"];
                      return (
                        <div key={i} style={{
                          width: 26, height: 26, borderRadius: "50%", margin: "0 auto",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: colors[i] + "1F", color: colors[i],
                          fontSize: 11, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif",
                        }}>
                          {d}
                        </div>
                      );
                    })}
                  </div>

                  {/* Grelha de dias */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                    {Array.from({ length: firstDayOfWeek }, (_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: numDays }, (_, i) => i + 1).map((day) => {
                      const turno = monthSchedule[day];
                      const date = new Date(year, month, day);
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                      return (
                        <div key={day} style={{
                          aspectRatio: "1", borderRadius: 8, display: "flex", flexDirection: "column" as const,
                          alignItems: "center", justifyContent: "center", fontSize: 10,
                          background: turno ? "#F0E8D5" : isWeekend ? "#FAFAF8" : "#F7F5F0",
                          border: turno ? "1px solid #D8C28A" : "1px solid #EFEAE2",
                        }}>
                          <div style={{ fontSize: 9, color: "#A39B8E" }}>{day}</div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#2A241C" }}>{turno || "—"}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ============================================================
// UTILIZADORES DA APP (login interno)
// ============================================================
// "admin" tem acesso a tudo. No futuro podemos adicionar perfis
// restritos com role: "stock" | "utentes" | "colaboradores",
// cada um só com acesso à respetiva página.
type AppRole = "admin" | "stock" | "utentes" | "colaboradores";
interface AppUser { username: string; password: string; role: AppRole; }

const DEFAULT_APP_USERS: AppUser[] = [
  { username: "Sónia Loureiro", password: "sonialoureiro", role: "admin" },
  { username: "Admin", password: "admin", role: "admin" },
];

function canAccessPage(user: AppUser | null, page: "utentes" | "schedule" | "stock"): boolean {
  if (!user) return false;
  if (user.role === "admin") return true;
  if (user.role === "colaboradores") return page === "schedule";
  return user.role === page;
}

function LoginScreen({ users, onLogin }: { users: AppUser[]; onLogin: (user: AppUser) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = username.trim().toLowerCase();
    const found = users.find(
      (u) => u.username.trim().toLowerCase() === trimmed && u.password === password
    );
    if (found) {
      setError("");
      onLogin(found);
    } else {
      setError("Nome de utilizador ou password incorretos.");
    }
  };

  return (
    <div style={{ position: "fixed" as const, inset: 0, background: "#1E3A1E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", padding: 24 }}>
      <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "32px 28px", width: "100%", maxWidth: 360, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: "#1A1612", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5B944" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V7l9-4 9 4v14" />
            <path d="M9 21V13h6v8" />
            <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M15 13h.01" />
          </svg>
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, textAlign: "center" as const, margin: "0 0 4px", color: "#2A241C" }}>
          Associação Oliveirense de Socorros Mútuos
        </h1>
        <p style={{ fontSize: 13, color: "#A39B8E", textAlign: "center" as const, margin: "0 0 24px" }}>
          Inicia sessão para continuar
        </p>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 }}>Nome de utilizador</label>
          <input
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="O teu nome"
            style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 14, colorScheme: "light" as const }}
          />
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: error ? 10 : 20, colorScheme: "light" as const }}
          />
          {error && <div style={{ color: "#C2554A", fontSize: 12, marginBottom: 14 }}>{error}</div>}
          <button
            type="submit"
            style={{ width: "100%", background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "12px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

// ============================================================
// PÁGINA PÚBLICA — HORÁRIO INDIVIDUAL DO COLABORADOR (via QR code)
// ============================================================
function ColaboradorSchedulePage({ code }: { code: string }) {
  const today = new Date();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [employeeName, setEmployeeName] = useState<string>("");
  const [schedule, setSchedule] = useState<Record<string, Record<string, Record<number, string>>>>({});
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  useEffect(() => {
    loadFromSupabase("escala_data").then((escala) => {
      const profiles = escala?.employee_profiles || {};
      const found = Object.keys(profiles).find((name) => profiles[name]?.colaboradorCode === code);
      if (!found) {
        setNotFound(true);
      } else {
        setEmployeeName(found);
        setSchedule(escala?.schedule || {});
      }
      setLoading(false);
    }).catch(() => {
      setNotFound(true);
      setLoading(false);
    });
  }, [code]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#F5EDD8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ textAlign: "center" as const, color: "#8A6A2E" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <div>A carregar horário...</div>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div style={{ minHeight: "100vh", background: "#F5EDD8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", padding: 24 }}>
        <div style={{ textAlign: "center" as const, color: "#8A6A2E", maxWidth: 360 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Link inválido ou expirado</div>
          <div style={{ fontSize: 13, color: "#6B6358" }}>Peça ao responsável para gerar um novo QR code.</div>
        </div>
      </div>
    );
  }

  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const monthData = schedule[monthKey] || {};
  const matchedKey = Object.keys(monthData).find((k) => k.trim().toLowerCase() === employeeName.trim().toLowerCase());
  const monthSchedule = matchedKey ? monthData[matchedKey] : (monthData[employeeName] || {});
  const numDays = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const av = getAvatar(employeeName);

  const summary: Record<string, number> = {};
  Object.values(monthSchedule).forEach((t: any) => { if (t) summary[t as string] = (summary[t as string] || 0) + 1; });

  const goPrev = () => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); };
  const goNext = () => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); };

  return (
    <div style={{ minHeight: "100vh", background: "#F5EDD8", fontFamily: "'Inter', sans-serif", paddingBottom: 60 }}>
      <div style={{ background: "#2A241C", padding: "28px 20px", display: "flex", alignItems: "center", gap: 16, color: "#FFFFFF" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: av.bg, color: av.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
          {av.initials}
        </div>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 700 }}>{employeeName}</div>
          <div style={{ fontSize: 12, color: "#C9C2B5" }}>O teu horário — Associação Oliveirense de Socorros Mútuos</div>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <button onClick={goPrev} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E" }}>
              <IconChevronLeft size={18} />
            </button>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>{MONTH_NAMES[month]} {year}</div>
            <button onClick={goNext} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E" }}>
              <IconChevronRight size={18} />
            </button>
          </div>

          {Object.keys(monthSchedule).length === 0 ? (
            <div style={{ textAlign: "center" as const, color: "#A39B8E", fontSize: 13, padding: "20px 0" }}>Sem turnos registados para este mês.</div>
          ) : (
            <>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 16 }}>
                {Object.entries(summary).map(([turno, count]) => (
                  <div key={turno} style={{ background: "#F0E8D5", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: "#8A6A2E" }}>
                    {SHIFT_TYPES[turno]?.label || turno}: <strong>{count}</strong>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
                {WEEKDAY_LETTERS.map((d, i) => (
                  <div key={i} style={{ textAlign: "center" as const, fontSize: 11, fontWeight: 700, color: "#A39B8E" }}>{d}</div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                {Array.from({ length: firstDayOfWeek }, (_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: numDays }, (_, i) => i + 1).map((day) => {
                  const turno = monthSchedule[day];
                  const def = turno ? SHIFT_TYPES[turno] : null;
                  const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
                  return (
                    <div key={day} style={{
                      aspectRatio: "1", borderRadius: 8, display: "flex", flexDirection: "column" as const,
                      alignItems: "center", justifyContent: "center", fontSize: 10,
                      background: def ? def.color : "#F7F5F0",
                      color: def && !LIGHT_SHIFTS.includes(turno) ? "#FFFFFF" : "#9A9388",
                      border: isToday ? "2px solid #2A241C" : "1px solid #EFEAE2",
                    }}>
                      <div style={{ fontSize: 9, opacity: 0.8 }}>{day}</div>
                      <div style={{ fontSize: 11, fontWeight: 700 }}>{turno || "—"}</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div style={{ textAlign: "center" as const, fontSize: 11, color: "#A39B8E", marginTop: 20 }}>
          Link pessoal e só de leitura — não partilhes com outros colaboradores.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PÁGINA PÚBLICA — MAPA GERAL DA EQUIPA (via QR code, versão colaboradores)
// ============================================================
function MapaGeralPage() {
  const today = new Date();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<string[]>([]);
  const [rvEmployees, setRvEmployees] = useState<string[]>([]);
  const [schedule, setSchedule] = useState<Record<string, Record<string, Record<number, string>>>>({});
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  useEffect(() => {
    loadFromSupabase("escala_data").then((escala) => {
      setEmployees(escala?.employees || []);
      setRvEmployees(escala?.rv_employees || []);
      setSchedule(escala?.schedule || {});
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#F5EDD8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ textAlign: "center" as const, color: "#8A6A2E" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <div>A carregar mapa...</div>
        </div>
      </div>
    );
  }

  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const monthData = schedule[monthKey] || {};
  const numDays = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: numDays }, (_, i) => i + 1);
  const allNames = [...rvEmployees, ...employees];

  const goPrev = () => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); };
  const goNext = () => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); };

  return (
    <div style={{ minHeight: "100vh", background: "#F5EDD8", fontFamily: "'Inter', sans-serif", padding: "20px 16px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap" as const, gap: 10 }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: "#2A241C" }}>Mapa de Turnos — Equipa</div>
            <div style={{ fontSize: 12, color: "#A39B8E" }}>Associação Oliveirense de Socorros Mútuos · só de leitura</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={goPrev} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E" }}>
              <IconChevronLeft size={18} />
            </button>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, minWidth: 120, textAlign: "center" as const }}>{MONTH_NAMES[month]} {year}</div>
            <button onClick={goNext} style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: "#8A6A2E" }}>
              <IconChevronRight size={18} />
            </button>
            <button onClick={() => window.print()} style={{ border: "1px solid #E4DED3", background: "#2A241C", color: "#F5B944", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              🖨️ Imprimir
            </button>
          </div>
        </div>

        <div style={{ overflowX: "auto" as const, background: "#FFFFFF", border: "1px solid #E4DED3", borderRadius: 14 }}>
          <table style={{ borderCollapse: "collapse" as const, width: "100%", fontSize: 12 }}>
            <thead>
              <tr>
                <th style={{ position: "sticky" as const, left: 0, background: "#FBF9F5", textAlign: "left" as const, padding: "8px 12px", borderBottom: "2px solid #E4DED3", borderRight: "1px solid #EFEAE2", minWidth: 150 }}>Funcionário</th>
                {days.map((d) => {
                  const date = new Date(year, month, d);
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                  return (
                    <th key={d} style={{ background: isWeekend ? "#F4EFE6" : "#FBF9F5", padding: "6px 4px", borderBottom: "2px solid #E4DED3", borderRight: "1px solid #EFEAE2", minWidth: 32, fontSize: 11 }}>
                      <div>{d}</div>
                      <div style={{ fontSize: 9, color: "#A39B8E", fontWeight: 400 }}>{WEEKDAY_LETTERS[date.getDay()]}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {allNames.map((name) => {
                const matchedKey = Object.keys(monthData).find((k) => k.trim().toLowerCase() === name.trim().toLowerCase());
                const personSchedule = matchedKey ? monthData[matchedKey] : (monthData[name] || {});
                return (
                  <tr key={name}>
                    <td style={{ position: "sticky" as const, left: 0, background: "#FFFFFF", padding: "6px 12px", borderBottom: "1px solid #EFEAE2", borderRight: "1px solid #EFEAE2", fontWeight: 500 }}>{name}</td>
                    {days.map((d) => {
                      const turno = personSchedule[d];
                      const def = turno ? SHIFT_TYPES[turno] : null;
                      return (
                        <td key={d} style={{ textAlign: "center" as const, padding: "6px 2px", borderBottom: "1px solid #EFEAE2", borderRight: "1px solid #EFEAE2", background: def ? def.color : "#FBF9F5", color: def && !LIGHT_SHIFTS.includes(turno) ? "#FFFFFF" : "#9A9388", fontWeight: 700, fontSize: 11 }}>
                          {turno || "—"}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 14, marginTop: 16, fontSize: 12, color: "#6B6358" }}>
          {SHIFT_ORDER.map((key) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, display: "inline-block", background: SHIFT_TYPES[key].color, border: "1px solid rgba(0,0,0,0.06)" }} />
              {key} · {SHIFT_TYPES[key].label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Detectar acesso público de família via URL (?familia=CODIGO)
  const familyCode = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("familia")
    : null;
  const colaboradorCodeParam = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("colaborador")
    : null;
  const isMapaGeralParam = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("mapageral")
    : null;

  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [appUsersList, setAppUsersList] = useState<AppUser[]>(DEFAULT_APP_USERS);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [changePassCurrent, setChangePassCurrent] = useState("");
  const [changePassNew, setChangePassNew] = useState("");
  const [changePassConfirm, setChangePassConfirm] = useState("");

  const today = new Date();
  const [activePage, setActivePage] = useState<"home" | "schedule" | "stock" | "utentes">("home");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "synced" | "error">("idle");
  const [syncDone, setSyncDone] = useState(false);
  const [quickSearch, setQuickSearch] = useState("");
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [quickSearchTarget, setQuickSearchTarget] = useState<{ type: "utente" | "colaborador"; name: string; photo?: string } | null>(null);
  const [quickSearchHighlight, setQuickSearchHighlight] = useState(-1);

  const [employees, setEmployees] = useState<string[]>(() => {
    const stored = loadStoredData();
    return stored?.employees ?? DEFAULT_EMPLOYEES;
  });
  const [rvEmployees, setRvEmployees] = useState<string[]>(() => {
    const stored = loadStoredData();
    return stored?.rvEmployees ?? DEFAULT_RV_EMPLOYEES;
  });
  const [schedule, setSchedule] = useState<Record<string, Record<string, Record<number, string>>>>(() => {
    const stored = loadStoredData();
    return stored?.schedule ?? {};
  });
  const [extraHours, setExtraHours] = useState<Record<string, Record<string, Record<number, number>>>>(() => {
    const stored = loadStoredData();
    return stored?.extraHours ?? {};
  });
  const [employeeEmails, setEmployeeEmails] = useState<Record<string, string>>(() => {
    const stored = loadStoredData();
    return stored?.employeeEmails ?? {};
  });
  const [employeeProfiles, setEmployeeProfiles] = useState<Record<string, {
    fullName?: string;
    contact?: string;
    email?: string;
    category?: string;
    schedule?: string;
    notes?: string;
    preferredShift?: "M" | "T" | "N" | "";
    files?: { name: string; type: string; data: string; url?: string; uploadedAt: string }[];
    colaboradorCode?: string;
  }>>(() => {
    const stored = loadStoredData();
    return stored?.employeeProfiles ?? {};
  });
  const [openProfile, setOpenProfile] = useState<string | null>(null);
  const [colaboradorLinkModal, setColaboradorLinkModal] = useState<{ name: string; link: string } | null>(null);
  const [showMapaGeralModal, setShowMapaGeralModal] = useState(false);
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const [scheduleLink, setScheduleLink] = useState<string>(() => {
    const stored = loadStoredData();
    return stored?.scheduleLink ?? "";
  });
  const [lastPublished, setLastPublished] = useState<Record<string, Record<string, Record<number, string>>>>(() => {
    const stored = loadStoredData();
    return stored?.lastPublished ?? {};
  });

  const [newName, setNewName] = useState("");
  const [showAdd, setShowAdd] = useState<"rv" | "main" | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ name: string; group: "rv" | "main"; x: number; y: number } | null>(null);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedDays, setSelectedDays] = useState<Set<number>>(new Set());
  const [confirmClear, setConfirmClear] = useState(false);
  const [showPrintMenu, setShowPrintMenu] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [clipboardShift, setClipboardShift] = useState<{ shift: string | null; hours?: number } | null>(null);
  const [focusedCell, setFocusedCell] = useState<{ emp: string; day: number } | null>(null);
  const typeBufferRef = useRef<{ key: string; text: string; timer: any }>({ key: "", text: "", timer: null });
  const paintRef = useRef<{ active: boolean; shift: string | null; hours?: number }>({ active: false, shift: null });

  const showTip = (e: React.MouseEvent, text: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ text, x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };
  const hideTip = () => setTooltip(null);

  const syncFromSupabase = () => {
    setSyncStatus("syncing");
    const startTime = Date.now();
    const MIN_DURATION = 2500; // tempo mínimo visível da animação

    Promise.all([
      loadFromSupabase("escala_data"),
      loadFromSupabase("stock_data"),
      loadFromSupabase("utentes_data"),
      loadFromSupabase("app_users"),
    ]).then(([escala, stock, utentesRow, appUsersRow]) => {
      if (appUsersRow?.users?.length) setAppUsersList(appUsersRow.users);
      if (escala) {
        if (escala.employees?.length) setEmployees(escala.employees);
        if (escala.rv_employees?.length) setRvEmployees(escala.rv_employees);
        if (escala.schedule && Object.keys(escala.schedule).length) setSchedule(escala.schedule);
        if (escala.extra_hours && Object.keys(escala.extra_hours).length) setExtraHours(escala.extra_hours);
        if (escala.employee_emails && Object.keys(escala.employee_emails).length) setEmployeeEmails(escala.employee_emails);
        if (escala.employee_profiles && Object.keys(escala.employee_profiles).length) setEmployeeProfiles(escala.employee_profiles);
        if (escala.schedule_link) setScheduleLink(escala.schedule_link);
        if (escala.last_published && Object.keys(escala.last_published).length) setLastPublished(escala.last_published);
      }
      if (stock) {
        try {
          window.localStorage?.setItem?.("turnos-stock-data-v1", JSON.stringify({
            products: stock.products ?? [],
            movements: stock.movements ?? [],
            customCategories: stock.custom_categories ?? [],
          }));
        } catch (e) {}
      }
      if (utentesRow?.utentes?.length) {
        try {
          window.localStorage?.setItem?.("turnos-utentes-data-v1", JSON.stringify({
            utentes: utentesRow.utentes,
          }));
        } catch (e) {}
      }
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => {
        setSyncStatus(escala ? "synced" : "idle");
        setSyncDone((prev) => !prev);
      }, remaining);
    }).catch(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => setSyncStatus("error"), remaining);
    });
  };

  // Carregar do Supabase ao iniciar (sincronização em background)
  const [initialSyncComplete, setInitialSyncComplete] = useState(false);
  useEffect(() => {
    syncFromSupabase();
    // Marcar sincronização inicial como completa após terminar (sucesso ou erro)
  }, []);

  // Terminar o "arrastar para copiar" quando o botão do rato é solto em qualquer sítio da página
  useEffect(() => {
    const handleGlobalMouseUp = () => { paintRef.current.active = false; };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  // Detectar quando o syncStatus sai de "syncing" pela primeira vez para liberar gravações
  useEffect(() => {
    if (syncStatus === "synced" || syncStatus === "error" || syncStatus === "idle") {
      if (!initialSyncComplete) setInitialSyncComplete(true);
    }
  }, [syncStatus]);

  // Guardar tudo automaticamente — só depois da sincronização inicial, para nunca sobrescrever com dados vazios
  useEffect(() => {
    if (!initialSyncComplete) return;
    saveStoredData({
      employees,
      rvEmployees,
      schedule,
      extraHours,
      employeeEmails,
      employeeProfiles,
      scheduleLink,
      lastPublished,
    });
  }, [employees, rvEmployees, schedule, extraHours, employeeEmails, employeeProfiles, scheduleLink, lastPublished, initialSyncComplete]);

  const numDays = daysInMonth(year, month);
  const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const days = Array.from({ length: numDays }, (_, i) => i + 1);
  const allEmployees = useMemo(() => [...rvEmployees, ...employees], [rvEmployees, employees]);

  // ---------- Turnos ----------
  const getShift = (employee: string, day: number) => {
    return schedule?.[monthKey]?.[employee]?.[day] || null;
  };

  const setShift = (employee: string, day: number, value: string | null) => {
    setSchedule((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      next[monthKey][employee] = { ...(next[monthKey][employee] || {}) };
      if (value === null) {
        delete next[monthKey][employee][day];
      } else {
        next[monthKey][employee][day] = value;
      }
      return next;
    });

    // Ao marcar "Extra", define um valor inicial de horas (editável depois)
    if (value === "EX") {
      setExtraHours((prev) => {
        const current = prev?.[monthKey]?.[employee]?.[day];
        if (current !== undefined) return prev;
        const next = { ...prev };
        next[monthKey] = { ...(next[monthKey] || {}) };
        next[monthKey][employee] = { ...(next[monthKey][employee] || {}) };
        next[monthKey][employee][day] = SHIFT_TYPES.EX.hours;
        return next;
      });
    }
  };

  // ---------- Copiar / colar turno individual (Ctrl+C / Ctrl+V numa célula) ----------
  const copyShiftAt = (employee: string, day: number) => {
    const shift = getShift(employee, day);
    const hours = shift === "EX" ? getExtraHours(employee, day) : undefined;
    setClipboardShift({ shift, hours });
  };

  const pasteShiftAt = (employee: string, day: number) => {
    if (!clipboardShift) return;
    setShift(employee, day, clipboardShift.shift);
    if (clipboardShift.shift === "EX" && clipboardShift.hours !== undefined) {
      setExtraHoursValue(employee, day, String(clipboardShift.hours));
    }
  };

  // ---------- Arrastar para copiar (pintar o turno de uma célula sobre outras, ao arrastar o rato) ----------
  const startPaint = (employee: string, day: number) => {
    if (selectMode) return;
    const shift = getShift(employee, day);
    paintRef.current = {
      active: true,
      shift,
      hours: shift === "EX" ? getExtraHours(employee, day) : undefined,
    };
  };

  const paintOver = (employee: string, day: number, buttonsPressed: number) => {
    if (selectMode || !paintRef.current.active || buttonsPressed !== 1) return;
    setShift(employee, day, paintRef.current.shift);
    if (paintRef.current.shift === "EX" && paintRef.current.hours !== undefined) {
      setExtraHoursValue(employee, day, String(paintRef.current.hours));
    }
  };

  // ---------- Escrever a sigla do turno diretamente pelo teclado ----------
  const resetTypeBuffer = () => {
    if (typeBufferRef.current.timer) clearTimeout(typeBufferRef.current.timer);
    typeBufferRef.current = { key: "", text: "", timer: null };
  };

  // Foca a célula de um colaborador/dia específico (usado na navegação por setas)
  const focusCell = (employee: string, day: number) => {
    const candidates = document.querySelectorAll(`[data-day="${day}"]`);
    for (const el of Array.from(candidates)) {
      if ((el as HTMLElement).dataset.emp === employee) {
        (el as HTMLElement).focus();
        break;
      }
    }
  };

  // Confirma imediatamente a sigla em espera (usado pelo Enter e pelo temporizador de ambiguidade)
  const commitTypeBuffer = (employee: string, day: number) => {
    const cellKey = `${employee}-${day}`;
    if (typeBufferRef.current.key !== cellKey || !typeBufferRef.current.text) return;
    const text = typeBufferRef.current.text;
    const finalMatches = SHIFT_ORDER.filter((c) => c.startsWith(text));
    if (finalMatches.includes(text)) {
      setShift(employee, day, text);
    } else if (finalMatches.length >= 1) {
      setShift(employee, day, finalMatches[0]);
    }
    resetTypeBuffer();
  };

  const handleCellKeyDown = (e: React.KeyboardEvent, employee: string, day: number) => {
    if (selectMode) return;

    // Copiar / colar
    if (e.ctrlKey || e.metaKey) {
      if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        copyShiftAt(employee, day);
      } else if (e.key.toLowerCase() === "v") {
        e.preventDefault();
        pasteShiftAt(employee, day);
      }
      return;
    }

    // Navegar com as setas do teclado
    if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      resetTypeBuffer();
      if (e.key === "ArrowLeft") focusCell(employee, Math.max(1, day - 1));
      else if (e.key === "ArrowRight") focusCell(employee, Math.min(numDays, day + 1));
      else {
        const idx = allEmployees.indexOf(employee);
        if (idx === -1) return;
        const nextIdx = e.key === "ArrowUp" ? idx - 1 : idx + 1;
        if (nextIdx < 0 || nextIdx >= allEmployees.length) return;
        focusCell(allEmployees[nextIdx], day);
      }
      return;
    }

    // Enter — confirma já a sigla em espera (ex: escreveu "F" e ainda não decidiu FO/FC/FE/FR/FA)
    if (e.key === "Enter") {
      e.preventDefault();
      commitTypeBuffer(employee, day);
      return;
    }

    // Apagar turno
    if (e.key === "Backspace" || e.key === "Delete" || e.key === " ") {
      e.preventDefault();
      setShift(employee, day, null);
      resetTypeBuffer();
      return;
    }

    if (e.key === "Escape") {
      resetTypeBuffer();
      return;
    }

    // Escrever a sigla (ex: M, T, N, EX, FO, FC, FE, FR, BM, MT, FA)
    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
      e.preventDefault();
      const letter = e.key.toUpperCase();
      const cellKey = `${employee}-${day}`;
      const prevText = typeBufferRef.current.key === cellKey ? typeBufferRef.current.text : "";

      let newText = prevText + letter;
      let matches = SHIFT_ORDER.filter((c) => c.startsWith(newText));
      if (matches.length === 0) {
        newText = letter;
        matches = SHIFT_ORDER.filter((c) => c.startsWith(newText));
      }
      if (matches.length === 0) return; // letra inválida, ignora

      if (matches.length === 1 && matches[0] === newText) {
        // correspondência única e exata — atribui já
        setShift(employee, day, newText);
        resetTypeBuffer();
        return;
      }

      // ambíguo (ex: "M" pode ser M ou MT) — espera um pouco por mais teclas
      if (typeBufferRef.current.timer) clearTimeout(typeBufferRef.current.timer);
      typeBufferRef.current.key = cellKey;
      typeBufferRef.current.text = newText;
      typeBufferRef.current.timer = setTimeout(() => {
        const finalMatches = SHIFT_ORDER.filter((c) => c.startsWith(newText));
        if (finalMatches.includes(newText)) {
          setShift(employee, day, newText);
        } else if (finalMatches.length === 1) {
          setShift(employee, day, finalMatches[0]);
        }
        resetTypeBuffer();

      }, 650);
    }
  };

  const getExtraHours = (employee: string, day: number) => {
    const value = extraHours?.[monthKey]?.[employee]?.[day];
    return value !== undefined ? value : SHIFT_TYPES.EX.hours;
  };

  const setExtraHoursValue = (employee: string, day: number, value: string) => {
    const num = Math.min(24, Math.max(0, Number(value) || 0));
    setExtraHours((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      next[monthKey][employee] = { ...(next[monthKey][employee] || {}) };
      next[monthKey][employee][day] = num;
      return next;
    });
  };

  // ---------- Gestão de colaboradores ----------
  const addEmployee = () => {
    const trimmed = newName.trim();
    if (!trimmed) return;
    if (showAdd === "rv") {
      if (rvEmployees.includes(trimmed) || employees.includes(trimmed)) return;
      setRvEmployees((prev) => [...prev, trimmed]);
    } else {
      if (rvEmployees.includes(trimmed) || employees.includes(trimmed)) return;
      setEmployees((prev) => [...prev, trimmed]);
    }
    setNewName("");
    setShowAdd(null);
  };

  const removeEmployee = (name: string, group: "rv" | "main") => {
    if (group === "rv") {
      setRvEmployees((prev) => prev.filter((e) => e !== name));
    } else {
      setEmployees((prev) => prev.filter((e) => e !== name));
    }
    setSchedule((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((mk) => {
        if (next[mk][name]) {
          next[mk] = { ...next[mk] };
          delete next[mk][name];
        }
      });
      return next;
    });
    setExtraHours((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((mk) => {
        if (next[mk][name]) {
          next[mk] = { ...next[mk] };
          delete next[mk][name];
        }
      });
      return next;
    });
    setEmployeeEmails((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setOpenProfile((prev) => (prev === name ? null : prev));
    setConfirmDelete(null);
  };

  // ---------- Link/QR code individual do colaborador (acesso só de leitura ao próprio horário) ----------
  const generateColaboradorCode = () => {
    return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
  };

  const handleGetColaboradorLink = (name: string) => {
    let code = employeeProfiles[name]?.colaboradorCode;
    if (!code) {
      code = generateColaboradorCode();
      setEmployeeProfiles((prev) => ({ ...prev, [name]: { ...(prev[name] || {}), colaboradorCode: code } }));
    }
    const link = `${window.location.origin}${window.location.pathname}?colaborador=${code}`;
    setColaboradorLinkModal({ name, link });
  };

  const handleEditEmail = (name: string) => {
    const current = employeeEmails[name] || "";
    const value = window.prompt(`Email de ${name}:`, current);
    if (value === null) return; // cancelado
    const trimmed = value.trim();
    setEmployeeEmails((prev) => {
      const next = { ...prev };
      if (trimmed) {
        next[name] = trimmed;
      } else {
        delete next[name];
      }
      return next;
    });
  };

  // ---------- Alterar password do utilizador atual ----------
  const [changePasswordError, setChangePasswordError] = useState("");
  const handleChangePassword = (currentPass: string, newPass: string, confirmPass: string) => {
    if (!currentUser) return;
    if (currentPass !== currentUser.password) {
      setChangePasswordError("A password atual está incorreta.");
      return;
    }
    if (!newPass || newPass.length < 4) {
      setChangePasswordError("A nova password deve ter pelo menos 4 caracteres.");
      return;
    }
    if (newPass !== confirmPass) {
      setChangePasswordError("As duas passwords novas não coincidem.");
      return;
    }
    const updatedList = appUsersList.map((u) =>
      u.username === currentUser.username ? { ...u, password: newPass } : u
    );
    setAppUsersList(updatedList);
    setCurrentUser({ ...currentUser, password: newPass });
    saveToSupabase("app_users", { users: updatedList }).catch(() => {
      alert("⚠️ A password foi alterada nesta sessão, mas não foi possível gravar na nuvem. Tenta novamente mais tarde.");
    });
    setChangePasswordError("");
    setShowChangePassword(false);
    setChangePassCurrent("");
    setChangePassNew("");
    setChangePassConfirm("");
    alert("✅ Password alterada com sucesso!");
  };

  // ---------- Navegação de mês ----------
  const goPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  // ---------- Totais por colaborador ----------
  const employeeTotals = useMemo(() => {
    const totals: Record<string, {
      hours: number;
      counts: Record<string, number>;
      daysWorked: number;
      absences: number;
      extra: number;
      total: number;
    }> = {};
    allEmployees.forEach((emp) => {
      let hours = 0;
      let extra = 0;
      let daysWorked = 0;
      const counts: Record<string, number> = Object.fromEntries(SHIFT_ORDER.map((k) => [k, 0]));
      for (let d = 1; d <= numDays; d++) {
        const s = getShift(emp, d);
        if (s) {
          counts[s] = (counts[s] || 0) + 1;
          if (s === "EX") {
            extra += getExtraHours(emp, d);
            daysWorked += 1;
          } else if (s === "M" || s === "T" || s === "N") {
            hours += SHIFT_TYPES[s].hours;
            daysWorked += 1;
          } else if (s === "MT") {
            hours += SHIFT_TYPES.MT.hours;
            daysWorked += 1;
          }
        }
      }
      totals[emp] = {
        hours,
        counts,
        daysWorked,
        absences: counts.FA,
        extra,
        total: hours + extra,
      };
    });
    return totals;
  }, [allEmployees, schedule, extraHours, monthKey, numDays]);

  // ---------- Cobertura por dia (apenas equipa principal) ----------
  const dayCoverage = useMemo(() => {
    const cov: Record<number, { M: number; T: number; N: number }> = {};
    for (let d = 1; d <= numDays; d++) {
      cov[d] = { M: 0, T: 0, N: 0 };
      allEmployees.forEach((emp) => {
        const s = getShift(emp, d);
        if (s === "M") cov[d].M += 1;
        else if (s === "T") cov[d].T += 1;
        else if (s === "N") cov[d].N += 1;
        else if (s === "MT") {
          cov[d].M += 1;
          cov[d].T += 1;
        }
      });
    }
    return cov;
  }, [allEmployees, schedule, monthKey, numDays]);

  const shiftLabel = (code: string | null) => (code ? SHIFT_TYPES[code]?.label || code : "Sem turno");

  // ---------- Cobertura mínima ----------
  const COVERAGE_MIN = { M: 3, T: 3, N: 2 };

  const coverageAlerts = useMemo(() => {
    const alerts: { day: number; shifts: string[] }[] = [];
    for (let d = 1; d <= numDays; d++) {
      const c = dayCoverage[d] || { M: 0, T: 0, N: 0 };
      const under: string[] = [];
      if (c.M < COVERAGE_MIN.M) under.push(`Manhã (${c.M}/${COVERAGE_MIN.M})`);
      if (c.T < COVERAGE_MIN.T) under.push(`Tarde (${c.T}/${COVERAGE_MIN.T})`);
      if (c.N < COVERAGE_MIN.N) under.push(`Noite (${c.N}/${COVERAGE_MIN.N})`);
      if (under.length > 0) alerts.push({ day: d, shifts: under });
    }
    return alerts;
  }, [dayCoverage, numDays]);

  // ---------- Construção de tabelas HTML (impressão / página partilhável) ----------
  const buildTableHTML = (names: string[], { showStats, showCoverage, sectionTitle }: { showStats: boolean; showCoverage: boolean; sectionTitle?: string }) => {
    const dayHeaderCells = days
      .map((d) => {
        const date = new Date(year, month, d);
        const weekend = date.getDay() === 0 || date.getDay() === 6;
        return `<th class="${weekend ? "weekend" : ""}"><div class="dnum">${d}</div><div class="dletter">${WEEKDAY_LETTERS[date.getDay()]}</div></th>`;
      })
      .join("");

    const statsHeader = showStats
      ? `<th>Dias</th><th>Horas</th><th>Faltas</th><th>H.Extra</th><th>Total</th>`
      : "";

    const rows = names
      .map((emp) => {
        const cells = days
          .map((d) => {
            const shift = getShift(emp, d);
            const def = shift ? SHIFT_TYPES[shift] : null;
            const bg = def ? def.color : "#F7F5F0";
            const color = def && shift && !LIGHT_SHIFTS.includes(shift) ? "#FFFFFF" : "#6B6358";
            return `<td style="background:${bg};color:${color}">${shift || "—"}</td>`;
          })
          .join("");
        let statsCells = "";
        if (showStats) {
          const t = employeeTotals[emp] || { hours: 0, daysWorked: 0, absences: 0, extra: 0, total: 0 };
          statsCells = `<td class="stat">${t.daysWorked ?? 0}</td><td class="stat">${t.hours ?? 0}h</td><td class="stat">${t.absences ?? 0}</td><td class="stat">${t.extra ?? 0}h</td><td class="stat total">${t.total ?? 0}h</td>`;
        }
        return `<tr><td class="name">${emp}</td>${cells}${statsCells}</tr>`;
      })
      .join("");

    let coverageRow = "";
    if (showCoverage) {
      const coverageCells = days
        .map((d) => {
          const c = dayCoverage[d] || { M: 0, T: 0, N: 0 };
          return `<td class="coverage"><span style="color:${SHIFT_TYPES.M.color}">${c.M}</span><span class="sep">/</span><span style="color:${SHIFT_TYPES.T.color}">${c.T}</span><span class="sep">/</span><span style="color:${SHIFT_TYPES.N.color}">${c.N}</span></td>`;
        })
        .join("");
      const blanks = showStats ? "<td></td><td></td><td></td><td></td><td></td>" : "";
      coverageRow = `<tr class="coverage-row"><td class="name">Cobertura M/T/N</td>${coverageCells}${blanks}</tr>`;
    }

    return `
  ${sectionTitle ? `<h2 class="section-title">${sectionTitle}</h2>` : ""}
  <table>
    <thead>
      <tr>
        <th class="name">Funcionário</th>
        ${dayHeaderCells}
        ${statsHeader}
      </tr>
    </thead>
    <tbody>
      ${rows}
      ${coverageRow}
    </tbody>
  </table>`;
  };

  const legendHTML = () =>
    SHIFT_ORDER.map(
      (key) =>
        `<span class="legend-item"><span class="dot" style="background:${SHIFT_TYPES[key].color}"></span>${key} — ${SHIFT_TYPES[key].label}${key === "EX" ? " (horas variáveis)" : key === "MT" ? ` (${SHIFT_TYPES[key].hours}h)` : SHIFT_TYPES[key].hours > 0 ? ` (${SHIFT_TYPES[key].hours}h)` : ""}</span>`
    ).join("");

  const PRINT_STYLE = `
  @page { size: A4 landscape; margin: 10mm; }
  * { box-sizing: border-box; }
  body { font-family: Arial, Helvetica, sans-serif; color: #2A241C; margin: 0; padding: 16px; }
  h1 { font-size: 18px; text-align: center; margin: 0 0 4px; }
  h2.section-title { font-size: 13px; margin: 16px 0 6px; color: #6B6358; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; margin-bottom: 4px; }
  th, td { border: 1px solid #E4DED3; text-align: center; font-size: 10px; padding: 3px 2px; height: 22px; }
  th.name, td.name { text-align: left; width: 130px; font-weight: bold; padding-left: 6px; font-size: 11px; }
  th.weekend, td.weekend { background: #F4EFE6; }
  .dnum { font-weight: bold; font-size: 11px; }
  .dletter { font-size: 8px; color: #A39B8E; }
  td.stat { font-weight: bold; width: 36px; }
  td.stat.total { color: #B08A4E; }
  td.coverage { background: #FBF9F5; font-weight: bold; font-size: 9px; }
  .sep { color: #D9D4CC; margin: 0 1px; }
  .legend { margin-top: 12px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; font-size: 9px; }
  .legend-item { display: flex; align-items: center; gap: 4px; }
  .dot { width: 10px; height: 10px; border-radius: 2px; display: inline-block; border: 1px solid rgba(0,0,0,0.08); }
  tr.coverage-row td.name { color: #6B6358; }
  `;

  // ---------- Imprimir / Guardar PDF ----------
  const handlePrint = (includeStats = true) => {
    const titleSuffix = includeStats ? "" : " — Versão para colaboradores";

    const rvTable = buildTableHTML(rvEmployees, {
      showStats: includeStats,
      showCoverage: false,
      sectionTitle: "Colaboradores — Recibo Verde",
    });
    const mainTable = buildTableHTML(employees, {
      showStats: includeStats,
      showCoverage: true,
      sectionTitle: "Equipa",
    });

    const html = `
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<title>Escala de turnos — ${MONTH_NAMES[month]} ${year}</title>
<style>${PRINT_STYLE}</style>
</head>
<body>
  <h1>Escala de turnos — ${MONTH_NAMES[month]} ${year}${titleSuffix}</h1>
  ${rvTable}
  ${mainTable}
  <div class="legend">${legendHTML()}</div>
</body>
</html>`;

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Não foi possível abrir a janela de impressão. Verifique se os pop-ups estão bloqueados.");
      return;
    }
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  // ---------- Exportar para Excel (.csv) ----------
  const handleExportExcel = () => {
    const escapeCsv = (value: string | number | undefined | null) => {
      const s = String(value ?? "");
      if (s.includes(";") || s.includes('"') || s.includes("\n")) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    };

    const headerRow = [
      "Grupo",
      "Funcionário",
      ...days.map((d) => String(d)),
      "Dias trabalhados",
      "Horas",
      "Faltas",
      "Horas extra",
      "Total",
    ];

    const buildRows = (names: string[], groupLabel: string) =>
      names.map((emp) => {
        const t = employeeTotals[emp];
        const cells = days.map((d) => getShift(emp, d) || "");
        return [
          groupLabel,
          emp,
          ...cells,
          t?.daysWorked ?? 0,
          t?.hours ?? 0,
          t?.absences ?? 0,
          t?.extra ?? 0,
          t?.total ?? 0,
        ];
      });

    const rvRows = buildRows(rvEmployees, "Recibo Verde");
    const mainRows = buildRows(employees, "Equipa");

    const coverageRow = [
      "",
      "Cobertura (M/T/N)",
      ...days.map((d) => {
        const c = dayCoverage[d] || { M: 0, T: 0, N: 0 };
        return `${c.M}/${c.T}/${c.N}`;
      }),
      "", "", "", "", "",
    ];

    const legendNote = [
      "Legenda:",
      SHIFT_ORDER.map((k) => `${k}=${SHIFT_TYPES[k].label}`).join(", "),
    ];

    const lines = [headerRow, ...rvRows, ...mainRows, coverageRow, [], legendNote]
      .map((row) => row.map(escapeCsv).join(";"))
      .join("\r\n");

    const csvContent = "\uFEFF" + lines; // BOM para acentuação no Excel
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `escala-turnos-${monthKey}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ---------- Página HTML partilhável (sem dados pessoais) ----------


  // ---------- Notificar colaboradores por email ----------
  const toggleSelectMode = () => {
    setSelectMode((prev) => {
      if (prev) setSelectedDays(new Set());
      return !prev;
    });
  };

  const toggleDay = (d: number) => {
    setSelectedDays((prev) => {
      const next = new Set(prev);
      if (next.has(d)) {
        next.delete(d);
      } else {
        next.add(d);
      }
      return next;
    });
  };

  const selectAllDays = () => {
    setSelectedDays(new Set(days));
  };

  const clearSelectedDays = () => {
    setSchedule((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      allEmployees.forEach((emp) => {
        next[monthKey][emp] = { ...(next[monthKey][emp] || {}) };
        selectedDays.forEach((d) => {
          delete next[monthKey][emp][d];
        });
      });
      return next;
    });
    setExtraHours((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      allEmployees.forEach((emp) => {
        next[monthKey][emp] = { ...(next[monthKey][emp] || {}) };
        selectedDays.forEach((d) => {
          delete next[monthKey][emp][d];
        });
      });
      return next;
    });
    setSelectedDays(new Set());
    setSelectMode(false);
    setConfirmClear(false);
  };

  // ---------- Copiar / Colar horário ----------
  const [copiedMonth, setCopiedMonth] = useState<string | null>(null);
  const [showPasteConfirm, setShowPasteConfirm] = useState(false);

  const handleCopyMonth = () => {
    setCopiedMonth(monthKey);
    alert(`Horário de ${MONTH_NAMES[month]} ${year} copiado!\n\nNavegue para o mês de destino e clique em "Colar".`);
  };

  const handlePasteMonth = () => {
    if (!copiedMonth) return;
    setShowPasteConfirm(true);
  };

  const confirmPaste = (overwrite: boolean) => {
    if (!copiedMonth) return;

    const srcNumDays = daysInMonth(
      parseInt(copiedMonth.split("-")[0]),
      parseInt(copiedMonth.split("-")[1]) - 1
    );
    const dstNumDays = numDays;

    setSchedule((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      const srcData = prev[copiedMonth] || {};

      allEmployees.forEach((emp) => {
        if (!overwrite) {
          next[monthKey][emp] = { ...(next[monthKey][emp] || {}) };
        } else {
          next[monthKey][emp] = {};
        }
        const srcEmp = srcData[emp] || {};
        // Copiar só os dias que existem em ambos os meses
        for (let d = 1; d <= Math.min(srcNumDays, dstNumDays); d++) {
          if (srcEmp[d]) {
            next[monthKey][emp][d] = srcEmp[d];
          }
        }
      });
      return next;
    });

    setExtraHours((prev) => {
      const next = { ...prev };
      next[monthKey] = { ...(next[monthKey] || {}) };
      const srcData = prev[copiedMonth] || {};

      allEmployees.forEach((emp) => {
        if (overwrite) next[monthKey][emp] = {};
        else next[monthKey][emp] = { ...(next[monthKey][emp] || {}) };
        const srcEmp = srcData[emp] || {};
        for (let d = 1; d <= Math.min(srcNumDays, dstNumDays); d++) {
          if (srcEmp[d] !== undefined) {
            next[monthKey][emp][d] = srcEmp[d];
          }
        }
      });
      return next;
    });

    setShowPasteConfirm(false);
  };

  const copiedMonthLabel = copiedMonth
    ? `${MONTH_NAMES[parseInt(copiedMonth.split("-")[1]) - 1]} ${copiedMonth.split("-")[0]}`
    : "";

  // ---------- Backup / Restauro ----------
  // ---------- Gerar escala automaticamente (continuar padrão) ----------
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generateMode, setGenerateMode] = useState<"pattern" | "rules">("pattern");
  const [generateMinM, setGenerateMinM] = useState(3);
  const [generateMinT, setGenerateMinT] = useState(3);
  const [generateMinN, setGenerateMinN] = useState(2);
  const [generateFolgaDays, setGenerateFolgaDays] = useState(2); // folgas por semana

  const detectCyclePeriod = (seq: string[]): number | null => {
    const n = seq.length;
    for (let period = 4; period <= 16; period++) {
      let ok = true;
      for (let i = period; i < n; i++) {
        if (seq[i] !== seq[i % period]) { ok = false; break; }
      }
      if (ok) return period;
    }
    return null;
  };

  const handleGenerateNextMonth = () => {
    // Calcular o mês seguinte ao atualmente visível
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth > 11) { nextMonth = 0; nextYear++; }

    const currentKey = `${year}-${String(month + 1).padStart(2, "0")}`;
    const nextKey = `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}`;
    const currentMonthData = schedule[currentKey] || {};
    const numDaysCurrent = new Date(year, month + 1, 0).getDate();
    const numDaysNext = new Date(nextYear, nextMonth + 1, 0).getDate();

    const allStaff = [...employees]; // Recibo Verde excluído — gerido manualmente
    let totalGerados = 0;
    const newScheduleForMonth: Record<string, Record<number, string>> = {};

    allStaff.forEach((name) => {
      const personData = currentMonthData[name];
      if (!personData) return;
      const seq: string[] = [];
      for (let d = 1; d <= numDaysCurrent; d++) {
        seq.push(personData[d] || "FO");
      }
      const period = detectCyclePeriod(seq);
      const dayShifts: Record<number, string> = {};
      if (period) {
        for (let day = 1; day <= numDaysNext; day++) {
          const idx = (numDaysCurrent + day - 1) % period;
          dayShifts[day] = seq[idx];
        }
      } else {
        for (let day = 1; day <= numDaysNext; day++) {
          const idx = (seq.length + day - 1) % seq.length;
          dayShifts[day] = seq[idx];
        }
      }
      newScheduleForMonth[name] = dayShifts;
      totalGerados++;
    });

    if (totalGerados === 0) {
      alert("⚠️ Não há dados no mês atual para gerar o próximo. Importe ou preencha o mês atual primeiro.");
      return;
    }

    setSchedule((prev) => {
      // CRÍTICO: clonar profundamente e fazer merge — nunca perder meses já existentes
      const next: typeof prev = JSON.parse(JSON.stringify(prev || {}));
      next[nextKey] = newScheduleForMonth;

      saveToSupabase("escala_data", { schedule: next }).catch(() => {});

      return next;
    });

    setYear(nextYear);
    setMonth(nextMonth);
    setShowGenerateModal(false);
    alert(`✅ Escala de ${MONTH_NAMES[nextMonth]} ${nextYear} gerada automaticamente para ${totalGerados} colaborador(es)!`);
  };

  // ---------- Gerar escala por regras (mínimos + preferências) ----------
  // ---------- Auto-preencher preferências de turno com base no histórico ----------
  const handleAutoFillPreferences = () => {
    const allStaff = [...employees]; // Recibo Verde excluído — gerido manualmente
    const counts: Record<string, { M: number; T: number; N: number }> = {};
    allStaff.forEach((n) => { counts[n] = { M: 0, T: 0, N: 0 }; });

    // Percorrer todos os meses guardados no schedule
    Object.values(schedule || {}).forEach((monthData) => {
      Object.entries(monthData || {}).forEach(([name, days]) => {
        if (!counts[name]) counts[name] = { M: 0, T: 0, N: 0 };
        Object.values(days || {}).forEach((turno) => {
          if (turno === "M" || turno === "T" || turno === "N") {
            counts[name][turno]++;
          }
        });
      });
    });

    let atualizados = 0;
    setEmployeeProfiles((prev) => {
      const next = { ...prev };
      allStaff.forEach((name) => {
        const c = counts[name];
        if (!c) return;
        const total = c.M + c.T + c.N;
        if (total === 0) return; // sem histórico, não mexe

        const max = Math.max(c.M, c.T, c.N);
        const pref: "M" | "T" | "N" = c.M === max ? "M" : c.T === max ? "T" : "N";

        // Só preenche se ainda não tiver preferência definida manualmente
        if (!next[name]?.preferredShift) {
          next[name] = { ...(next[name] || {}), preferredShift: pref };
          atualizados++;
        }
      });
      return next;
    });

    if (atualizados === 0) {
      alert("ℹ️ Todos os colaboradores já têm preferência definida, ou não há histórico suficiente.");
    } else {
      alert(`✅ Preferência de turno preenchida automaticamente para ${atualizados} colaborador(es), com base no histórico de turnos!`);
    }
  };

  // ─── Relatório Único ───────────────────────────────────────────────────
  const handleGerarRelatorioUnico = () => {
    const anoRef = year;
    const totalColabs = [...employees, ...rvEmployees].length;
    const horasMes: Record<string, number> = {};
    const scheduleAno = Object.entries(schedule || {}).filter(([k]) => k.startsWith(String(anoRef)));
    scheduleAno.forEach(([, mesData]) => {
      Object.entries(mesData || {}).forEach(([nome, dias]) => {
        const horas = Object.values(dias as Record<number, string>).filter(t => ["M","T","N"].includes(t)).length * 8;
        horasMes[nome] = (horasMes[nome] || 0) + horas;
      });
    });

    const campo = (label: string, valor: string, linhas = 1) => {
      const minH = linhas === 1 ? "20px" : `${linhas * 20}px`;
      return `<div style="margin-bottom:6px">
        <div style="font-size:6.5pt;font-weight:bold;color:#555;text-transform:uppercase;letter-spacing:.5px;margin-bottom:1px">${label}</div>
        <div contenteditable="true" style="border:.5px solid #BBB;background:#FAFAFA;min-height:${minH};padding:3px 5px;font-size:8.5pt;color:#2A241C;line-height:1.4;outline:none" onfocus="this.style.background='#EEF4FF'" onblur="this.style.background='#FAFAFA'">${valor}</div>
      </div>`;
    };
    const secao = (t: string) => `<div style="background:#3A5A70;color:white;padding:3px 7px;font-size:8.5pt;font-weight:bold;margin:8px 0 5px">${t}</div>`;

    const tabelaColabs = [...employees, ...rvEmployees].map(nome => {
      const perfil = employeeProfiles[nome] || {};
      const horas = horasMes[nome] || 0;
      const tipo = rvEmployees.includes(nome) ? "Recibo Verde" : "Contrato";
      return `<tr>
        <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${nome}</td>
        <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${perfil.category || ""}</td>
        <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${tipo}</td>
        <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${perfil.schedule || ""}</td>
        <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt;text-align:center">${horas}h</td>
      </tr>`;
    }).join("");

    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Relatório Único ${anoRef}</title>
    <style>
      @page { size: A4; margin: 12mm 15mm; }
      @media print { .no-print { display:none!important; } [contenteditable] { background:#FAFAFA!important; } }
      body { font-family:Arial,sans-serif;font-size:8.5pt;color:#2A241C;width:180mm;margin:0 auto;padding:8mm;box-sizing:border-box }
      table { width:100%;border-collapse:collapse;margin-bottom:8px }
      th { background:#E8EEF5;border:.5px solid #CCC;padding:3px 5px;font-size:8pt;text-align:left }
    </style></head><body>
    <div class="no-print" style="background:#2A241C;color:#F5B944;padding:8px 14px;margin-bottom:10px;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <span>📊 Relatório Único ${anoRef} — AOSM</span>
      <button onclick="window.print()" style="background:#F5B944;color:#2A241C;border:none;padding:5px 14px;border-radius:6px;font-weight:700;cursor:pointer">🖨️ Imprimir / PDF</button>
    </div>
    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:13pt;font-weight:bold">ASSOCIAÇÃO OLIVEIRENSE DE SOCORROS MÚTUOS</div>
      <div style="font-size:9pt;color:#3A5A70">Relatório Único — Ano de referência: ${anoRef}</div>
      <hr style="border:none;border-top:1.5px solid #3A5A70;margin:4px 0">
    </div>

    ${secao("I. IDENTIFICAÇÃO DA ENTIDADE")}
    ${campo("Designação social", "Associação Oliveirense de Socorros Mútuos")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("NIF", "")}${campo("CAE", "")}
    </div>
    ${campo("Morada", "")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("Código Postal", "")}${campo("Localidade", "Oliveira do Douro")}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("Telefone", "")}${campo("Email", "")}
    </div>
    ${campo("Nome do responsável pelo preenchimento", "")}

    ${secao("II. QUADRO DE PESSOAL")}
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px">
      ${campo("Total de trabalhadores", String(totalColabs))}
      ${campo("Trabalhadores efectivos", String(employees.length))}
      ${campo("Prestadores de serviço (RV)", String(rvEmployees.length))}
    </div>
    <table>
      <thead><tr>
        <th>Nome</th><th>Categoria</th><th>Vínculo</th><th>Horário contratual</th><th>Horas ${anoRef}</th>
      </tr></thead>
      <tbody>${tabelaColabs}</tbody>
    </table>

    ${secao("III. ADMISSÕES E SAÍDAS")}
    ${campo("Admissões no ano", "", 2)}
    ${campo("Cessações de contrato no ano", "", 2)}

    ${secao("IV. FORMAÇÃO PROFISSIONAL")}
    ${campo("Acções de formação realizadas", "", 2)}
    ${campo("Nº de trabalhadores abrangidos", "")}
    ${campo("Total de horas de formação", "")}

    ${secao("V. SEGURANÇA E SAÚDE NO TRABALHO")}
    ${campo("Acidentes de trabalho", "")}
    ${campo("Doenças profissionais", "")}
    ${campo("Medidas implementadas", "", 3)}

    ${secao("VI. TRABALHO SUPLEMENTAR")}
    ${campo("Total de horas suplementares", "")}
    ${campo("Observações", "", 2)}

    <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="border:.5px solid #CCC;padding:8px;text-align:center">
        <div style="font-size:7.5pt;font-weight:bold;margin-bottom:20px">Responsável pela entidade</div>
        <div style="border-top:.5px solid #999;margin:0 8px 4px"></div>
        <div style="font-size:7.5pt;color:#666">Data: ___/___/______</div>
      </div>
      <div style="border:.5px solid #CCC;padding:8px;text-align:center">
        <div style="font-size:7.5pt;font-weight:bold;margin-bottom:20px">Responsável pelo preenchimento</div>
        <div style="border-top:.5px solid #999;margin:0 8px 4px"></div>
        <div style="font-size:7.5pt;color:#666">Data: ___/___/______</div>
      </div>
    </div>
    <div style="text-align:center;font-size:7pt;color:#999;margin-top:10px;border-top:.5px solid #CCC;padding-top:4px">
      Relatório Único — Portaria n.º 55/2010 · Associação Oliveirense de Socorros Mútuos · ${anoRef}
    </div>
    </body></html>`;

    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }
    w.document.open(); w.document.write(html); w.document.close(); w.focus();
  };

  // ─── Relatório ERPI (ISS) ─────────────────────────────────────────────
  const handleGerarRelatorioERPI = async () => {
    const anoRef = year;
    // Carregar utentes do Supabase
    const row = await loadFromSupabase("utentes_data").catch(() => null);
    const utentesData: Utente[] = row?.utentes ?? [];
    const totalUtentes = utentesData.length;

    // Carregar dados já gravados anteriormente para este relatório (por ano)
    const erpiRow = await loadFromSupabase("erpi_data").catch(() => null);
    const erpiSavedByYear: Record<string, Record<string, string>> = erpiRow?.years || {};
    const savedYearData: Record<string, string> = erpiSavedByYear[String(anoRef)] || {};

    // Contar entradas no ano de referência, com base na data de entrada (DD/MM/AAAA) de cada utente
    const entradasNoAno = utentesData.filter((u) => {
      if (!u.entryDate) return false;
      const parts = u.entryDate.split("/");
      if (parts.length !== 3) return false;
      const anoEntrada = parseInt(parts[2], 10);
      return anoEntrada === anoRef;
    }).length;

    const campo = (label: string, valor: string, linhas = 1, key = "") => {
      const minH = linhas === 1 ? "20px" : `${linhas * 20}px`;
      const savedValue = key && savedYearData[key] ? savedYearData[key] : valor;
      return `<div style="margin-bottom:6px">
        <div style="font-size:6.5pt;font-weight:bold;color:#555;text-transform:uppercase;letter-spacing:.5px;margin-bottom:1px">${label}</div>
        <div contenteditable="true" data-key="${key || label}" style="border:.5px solid #BBB;background:#FAFAFA;min-height:${minH};padding:3px 5px;font-size:8.5pt;color:#2A241C;line-height:1.4;outline:none" onfocus="this.style.background='#EEF4FF'" onblur="this.style.background='#FAFAFA'">${savedValue}</div>
      </div>`;
    };
    const secao = (t: string) => `<div style="background:#3A5A70;color:white;padding:3px 7px;font-size:8.5pt;font-weight:bold;margin:8px 0 5px">${t}</div>`;

    const tabelaUtentes = utentesData.map(u => `<tr>
      <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${u.name}</td>
      <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${u.birthDate || ""}</td>
      <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${u.entryDate || ""}</td>
      <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${u.room || ""}</td>
      <td style="border:.5px solid #CCC;padding:3px 5px;font-size:8pt">${u.familyContact || ""}</td>
    </tr>`).join("");

    const html = `<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><title>Relatório ERPI ${anoRef}</title>
    <style>
      @page { size: A4; margin: 12mm 15mm; }
      @media print { .no-print { display:none!important; } [contenteditable] { background:#FAFAFA!important; } }
      body { font-family:Arial,sans-serif;font-size:8.5pt;color:#2A241C;width:180mm;margin:0 auto;padding:8mm;box-sizing:border-box }
      table { width:100%;border-collapse:collapse;margin-bottom:8px }
      th { background:#E8EEF5;border:.5px solid #CCC;padding:3px 5px;font-size:8pt;text-align:left }
    </style></head><body>
    <div class="no-print" style="background:#2A241C;color:#F5B944;padding:8px 14px;margin-bottom:10px;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <span>🏠 Relatório ERPI ${anoRef} — AOSM</span>
      <div style="display:flex;gap:8px">
        <button onclick="guardarNaApp()" style="background:#3A5A70;color:white;border:none;padding:6px 14px;border-radius:6px;font-weight:700;cursor:pointer;font-size:10pt">💾 Guardar na app</button>
        <button onclick="window.print()" style="background:#F5B944;color:#2A241C;border:none;padding:6px 16px;border-radius:6px;font-weight:700;cursor:pointer;font-size:10pt">🖨️ Imprimir / PDF</button>
      </div>
    </div>

    <script>
    function guardarNaApp() {
      const campos = {};
      document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if (k) campos[k] = el.innerText.trim();
      });
      if (window.opener && window.opener.__saveERPI) {
        window.opener.__saveERPI(campos);
        const btn = event.target;
        btn.textContent = '✅ Guardado!';
        btn.style.background = '#3B6D11';
        setTimeout(() => { btn.textContent = '💾 Guardar na app'; btn.style.background = '#3A5A70'; }, 2000);
      } else {
        alert('⚠️ Não foi possível comunicar com a app. Feche e abra o relatório novamente.');
      }
    }
    </script>

    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:13pt;font-weight:bold">ASSOCIAÇÃO OLIVEIRENSE DE SOCORROS MÚTUOS</div>
      <div style="font-size:9pt;color:#3A5A70">Estrutura Residencial para Pessoas Idosas (ERPI)</div>
      <div style="font-size:9pt;color:#3A5A70">Relatório de Actividade — Ano ${anoRef}</div>
      <hr style="border:none;border-top:1.5px solid #3A5A70;margin:4px 0">
    </div>

    ${secao("I. IDENTIFICAÇÃO DO ESTABELECIMENTO")}
    ${campo("Designação", "Associação Oliveirense de Socorros Mútuos", 1, "designacao")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("NIF", "", 1, "nif")}${campo("Nº de acordo com o ISS", "", 1, "issAcordo")}
    </div>
    ${campo("Morada", "", 1, "morada")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("Director(a) técnico(a)", "", 1, "diretorTecnico")}${campo("Contacto", "", 1, "contacto")}
    </div>

    ${secao("II. CAPACIDADE E OCUPAÇÃO")}
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      ${campo("Capacidade total (camas)", "", 1, "capacidadeTotal")}
      ${campo("Utentes no início do ano", "", 1, "utentesInicioAno")}
      ${campo("Utentes no final do ano", String(totalUtentes))}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("Entradas no ano", String(entradasNoAno))}
      ${campo("Saídas no ano (altas/óbitos)", "", 1, "saidasNoAno")}
    </div>
    ${campo("Taxa de ocupação média (%)", "", 1, "taxaOcupacao")}

    ${secao("III. LISTA DE UTENTES")}
    <table>
      <thead><tr>
        <th>Nome</th><th>Data Nasc.</th><th>Data Entrada</th><th>Quarto</th><th>Contacto Familiar</th>
      </tr></thead>
      <tbody>${tabelaUtentes}</tbody>
    </table>

    ${secao("IV. RECURSOS HUMANOS")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${campo("Total de colaboradores", String([...employees, ...rvEmployees].length))}
      ${campo("Rácio utente/colaborador", "", 1, "racioUtenteColaborador")}
    </div>
    ${campo("Categorias profissionais presentes", [...new Set(Object.values(employeeProfiles).map(p => p.category).filter(Boolean))].join(", "), 2)}

    ${secao("V. CUIDADOS PRESTADOS")}
    ${campo("Cuidados de higiene e conforto", "", 2, "cuidadosHigiene")}
    ${campo("Apoio à alimentação", "", 2, "apoioAlimentacao")}
    ${campo("Administração de medicação", "", 2, "administracaoMedicacao")}
    ${campo("Actividades de animação sociocultural", "", 2, "atividadesAnimacao")}
    ${campo("Outros cuidados prestados", "", 2, "outrosCuidados")}

    ${secao("VI. AVALIAÇÃO DA QUALIDADE")}
    ${campo("Reclamações recebidas", "", 1, "reclamacoes")}
    ${campo("Acções de melhoria implementadas", "", 3, "acoesMelhoria")}
    ${campo("Objectivos para o próximo ano", "", 3, "objetivosProximoAno")}

    <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
      ${["Director(a) Técnico(a)","Responsável pela entidade","Técnico(a) ISS"].map(t => `
        <div style="border:.5px solid #CCC;padding:8px;text-align:center">
          <div style="font-size:7.5pt;font-weight:bold;margin-bottom:20px">${t}</div>
          <div style="border-top:.5px solid #999;margin:0 6px 4px"></div>
          <div style="font-size:7.5pt;color:#666">Data: ___/___/______</div>
        </div>`).join("")}
    </div>
    <div style="text-align:center;font-size:7pt;color:#999;margin-top:10px;border-top:.5px solid #CCC;padding-top:4px">
      Relatório de Actividade ERPI · Portaria n.º 67/2012 (alterada pela Portaria n.º 349/2023) · AOSM · ${anoRef}
    </div>
    </body></html>`;

    const w = window.open("", "_blank");
    if (!w) { alert("Verifique se os pop-ups estão bloqueados."); return; }

    // Expor função de callback para guardar os dados deste relatório de volta na app/Supabase
    (window as any).__saveERPI = (campos: Record<string, string>) => {
      const merged = {
        ...erpiSavedByYear,
        [String(anoRef)]: { ...(erpiSavedByYear[String(anoRef)] || {}), ...campos },
      };
      saveToSupabase("erpi_data", { years: merged }).catch(() => {
        alert("⚠️ Não foi possível gravar na nuvem. Verifique a ligação e tente novamente.");
      });
    };

    w.document.open(); w.document.write(html); w.document.close(); w.focus();
  };

  const handleGenerateByRules = () => {
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth > 11) { nextMonth = 0; nextYear++; }
    const nextKey = `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}`;
    const numDaysNext = new Date(nextYear, nextMonth + 1, 0).getDate();

    const allStaff = [...employees]; // Recibo Verde excluído — gerido manualmente
    if (allStaff.length === 0) {
      alert("⚠️ Não há colaboradores registados.");
      return;
    }

    const newScheduleForMonth: Record<string, Record<number, string>> = {};
    allStaff.forEach((n) => { newScheduleForMonth[n] = {}; });

    // Regras fixas de ciclo (como em Julho): máx. 3-4 dias trabalho seguidos, máx. 2 dias folga seguidos
    const maxConsecutiveWork = Math.max(3, Math.min(4, 7 - generateFolgaDays));
    const maxConsecutiveFolga = 2;

    const consecutiveWork: Record<string, number> = {};
    const consecutiveFolga: Record<string, number> = {};
    const daysSinceLastFO: Record<string, number> = {};
    const totalAssigned: Record<string, number> = {};
    allStaff.forEach((n) => {
      consecutiveWork[n] = 0;
      consecutiveFolga[n] = 0;
      daysSinceLastFO[n] = 0;
      totalAssigned[n] = 0;
    });

    for (let day = 1; day <= numDaysNext; day++) {
      const needed: { shift: "M" | "T" | "N"; count: number }[] = [
        { shift: "M", count: generateMinM },
        { shift: "T", count: generateMinT },
        { shift: "N", count: generateMinN },
      ];

      const assignedToday = new Set<string>();
      const dayOfWeek = new Date(nextYear, nextMonth, day).getDay(); // 0=domingo

      // Quem JÁ atingiu o máximo de folgas seguidas é FORÇADO a trabalhar hoje (prioridade absoluta)
      const mustWorkToday = allStaff.filter((n) => consecutiveFolga[n] >= maxConsecutiveFolga);

      needed.forEach(({ shift, count }) => {
        const candidates = allStaff
          .filter((n) => !assignedToday.has(n) && consecutiveWork[n] < maxConsecutiveWork)
          .sort((a, b) => {
            // 1º: quem TEM de trabalhar hoje (limite de folgas atingido) vai sempre primeiro
            const mustA = mustWorkToday.includes(a) ? 0 : 1;
            const mustB = mustWorkToday.includes(b) ? 0 : 1;
            if (mustA !== mustB) return mustA - mustB;
            // 2º: quem está mais perto do limite de dias seguidos termina o ciclo primeiro
            if (consecutiveWork[a] !== consecutiveWork[b]) return consecutiveWork[b] - consecutiveWork[a];
            // 3º: rotação justa — quem tem menos turnos totais no mês
            if (totalAssigned[a] !== totalAssigned[b]) return totalAssigned[a] - totalAssigned[b];
            // 4º: preferência pelo turno
            const prefA = employeeProfiles[a]?.preferredShift === shift ? 0 : 1;
            const prefB = employeeProfiles[b]?.preferredShift === shift ? 0 : 1;
            return prefA - prefB;
          });

        // Garante mínimo, mas se houver pessoas que TÊM de trabalhar hoje, inclui-as mesmo acima do mínimo
        const mustHere = candidates.filter((n) => mustWorkToday.includes(n));
        const others = candidates.filter((n) => !mustWorkToday.includes(n));
        const chosen = [...mustHere, ...others].slice(0, Math.max(count, mustHere.length));

        chosen.forEach((n) => {
          newScheduleForMonth[n][day] = shift;
          assignedToday.add(n);
          consecutiveWork[n] = (consecutiveWork[n] || 0) + 1;
          consecutiveFolga[n] = 0; // reset folga ao trabalhar
          totalAssigned[n] = (totalAssigned[n] || 0) + 1;
          daysSinceLastFO[n] = (daysSinceLastFO[n] || 0) + 1;
        });
      });

      // Verificação final: ninguém pode ficar com consecutiveFolga >= maxConsecutiveFolga sem ter sido escalado
      // Se sobrar alguém (porque não havia turno disponível por já ter atingido maxConsecutiveWork=0 dias),
      // força-o num turno extra acima dos mínimos para não quebrar a regra das 2 folgas
      allStaff.forEach((n) => {
        if (!assignedToday.has(n) && consecutiveFolga[n] >= maxConsecutiveFolga) {
          // Escolher o turno preferido da pessoa, ou Manhã por defeito
          const fallbackShift = (employeeProfiles[n]?.preferredShift || "M") as "M" | "T" | "N";
          newScheduleForMonth[n][day] = fallbackShift;
          assignedToday.add(n);
          consecutiveWork[n] = 1;
          consecutiveFolga[n] = 0;
          totalAssigned[n] = (totalAssigned[n] || 0) + 1;
          daysSinceLastFO[n] = (daysSinceLastFO[n] || 0) + 1;
        }
      });

      // Quem não trabalhou hoje fica de folga
      allStaff.forEach((n) => {
        if (!assignedToday.has(n)) {
          const giveFolgaObrigatoria = daysSinceLastFO[n] >= 6 || dayOfWeek === 0;
          newScheduleForMonth[n][day] = giveFolgaObrigatoria ? "FO" : "FC";
          if (giveFolgaObrigatoria) daysSinceLastFO[n] = 0;
          consecutiveWork[n] = 0;
          consecutiveFolga[n] = (consecutiveFolga[n] || 0) + 1;
        }
      });
    }

    const avgAssigned = Object.values(totalAssigned).reduce((a, b) => a + b, 0) / allStaff.length;
    const underused = allStaff.filter((n) => totalAssigned[n] < avgAssigned * 0.3);

    setSchedule((prev) => {
      const next: typeof prev = JSON.parse(JSON.stringify(prev || {}));
      next[nextKey] = newScheduleForMonth;
      saveToSupabase("escala_data", { schedule: next }).catch(() => {});
      return next;
    });

    setYear(nextYear);
    setMonth(nextMonth);
    setShowGenerateModal(false);
    const underusedMsg = underused.length > 0
      ? `\n\n⚠️ Atenção: ${underused.join(", ")} ${underused.length === 1 ? "ficou" : "ficaram"} com poucos turnos atribuídos. Verifique manualmente.`
      : "";
    alert(`✅ Escala de ${MONTH_NAMES[nextMonth]} ${nextYear} gerada por regras para ${allStaff.length} colaborador(es)!\n\nMínimos: M=${generateMinM} T=${generateMinT} N=${generateMinN}${underusedMsg}\n\n⚠️ Reveja sempre a escala gerada — pode precisar de ajustes manuais.`);
  };

  const handleImportScheduleJSON = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          if (!data.turnos || !data.mes || !data.ano) {
            alert("❌ Ficheiro JSON inválido. Certifique-se que foi gerado pelo Claude.");
            return;
          }
          const mes = Number(data.mes); // mês real 1-12
          const ano = Number(data.ano);
          const key = `${ano}-${String(mes).padStart(2, "0")}`;
          let total = 0;

          setSchedule((prev) => {
            // CRÍTICO: clonar profundamente o estado anterior para nunca perder outros meses
            const next: typeof prev = JSON.parse(JSON.stringify(prev || {}));
            if (!next[key]) next[key] = {};
            Object.entries(data.turnos).forEach(([nome, dias]: [string, any]) => {
              if (!next[key][nome]) next[key][nome] = {};
              Object.entries(dias).forEach(([dia, turno]: [string, any]) => {
                next[key][nome][Number(dia)] = String(turno);
                total++;
              });
            });

            // Guardar no Supabase usando o schedule MERGED completo (next), nunca um valor antigo
            saveToSupabase("escala_data", { schedule: next })
              .then(() => {
                alert(`✅ Escala importada e guardada na nuvem! ${Object.keys(data.turnos).length} colaborador(es), ${total} turnos para ${data.mes}/${data.ano}.\n\n📅 Meses agora guardados: ${Object.keys(next).join(", ")}`);
              })
              .catch(() => {
                alert(`✅ Escala importada localmente! ${Object.keys(data.turnos).length} colaborador(es), ${total} turnos.\n⚠️ Não foi possível guardar na nuvem — verifique a ligação e tente sincronizar manualmente depois.`);
              });

            return next;
          });

          // Navegar para o mês importado (month é 0-indexed na app)
          setYear(ano);
          setMonth(mes - 1);
        } catch {
          alert("❌ Erro ao ler o ficheiro. Certifique-se que é um JSON válido.");
        }
      };
      reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  const handleExportBackup = () => {
    const data = {
      version: 2,
      exportedAt: new Date().toISOString(),
      employees,
      rvEmployees,
      schedule,
      extraHours,
      employeeEmails,
      employeeProfiles,
      scheduleLink,
      lastPublished,
    };

    // Incluir também os dados de stock
    const stockRaw = window.localStorage?.getItem?.("turnos-stock-data-v1");
    if (stockRaw) {
      try { (data as any).stock = JSON.parse(stockRaw); } catch (e) {}
    }

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    link.download = `backup-escala-turnos-${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          if (!data.employees || !data.schedule) {
            alert("Ficheiro de backup inválido ou incompatível.");
            return;
          }
          if (!window.confirm(`Restaurar backup de ${data.exportedAt ? new Date(data.exportedAt).toLocaleDateString("pt-PT") : "data desconhecida"}?\n\nISTO VAI SUBSTITUIR TODOS OS DADOS ATUAIS.`)) return;

          if (data.employees) setEmployees(data.employees);
          if (data.rvEmployees) setRvEmployees(data.rvEmployees);
          if (data.schedule) setSchedule(data.schedule);
          if (data.extraHours) setExtraHours(data.extraHours);
          if (data.employeeEmails) setEmployeeEmails(data.employeeEmails);
          if (data.employeeProfiles) setEmployeeProfiles(data.employeeProfiles);
          if (data.scheduleLink) setScheduleLink(data.scheduleLink);
          if (data.lastPublished) setLastPublished(data.lastPublished);

          // Restaurar dados de stock
          if (data.stock) {
            window.localStorage?.setItem?.("turnos-stock-data-v1", JSON.stringify(data.stock));
          }

          alert("✅ Backup restaurado com sucesso! Recarregue a página para ver tudo atualizado.");
        } catch (err) {
          alert("Erro ao ler o ficheiro. Certifique-se que é um ficheiro de backup válido.");
        }
      };
      reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };



  const handleNotify = () => {
    const recipients = allEmployees
      .map((emp) => employeeEmails[emp])
      .filter((email) => email && email.includes("@"));

    if (recipients.length === 0) {
      alert(
        "Nenhum colaborador tem email definido.\n\nClique no ícone de envelope junto ao nome de cada colaborador para adicionar o email."
      );
      return;
    }

    // Se não há link definido, pedir agora
    let link = scheduleLink;
    if (!link) {
      const entered = window.prompt(
        "Para incluir o link do horário no email, cole aqui o link do Netlify (gerado com o botão 🌐):\n\nSe ainda não gerou, cancele, clique no botão 🌐 para gerar e publicar a página, e depois volte a clicar no envelope.",
        ""
      );
      if (entered === null) return; // cancelado
      if (entered.trim()) {
        link = entered.trim();
        setScheduleLink(link);
      }
    }

    // Gerar a página HTML dos colaboradores e publicar no Netlify
    // (o utilizador já deve ter o link — geramos a página para que atualize o ficheiro)
    // handleExportEmployeePage removida

    const prevMonth = lastPublished?.[monthKey] || {};
    const changesByEmployee: Record<string, string[]> = {};

    allEmployees.forEach((emp) => {
      for (let d = 1; d <= numDays; d++) {
        const before = prevMonth?.[emp]?.[d] ?? null;
        const after = getShift(emp, d);
        if (before !== after) {
          changesByEmployee[emp] = changesByEmployee[emp] || [];
          changesByEmployee[emp].push(`dia ${d}: ${shiftLabel(before)} → ${shiftLabel(after)}`);
        }
      }
    });

    const hasChanges = Object.keys(changesByEmployee).length > 0;

    let body = `Olá,\n\nO horário de ${MONTH_NAMES[month]} ${year} foi atualizado.\n\n`;

    if (hasChanges) {
      body += "Alterações este mês:\n";
      Object.entries(changesByEmployee).forEach(([emp, list]) => {
        body += `• ${emp}: ${list.join("; ")}\n`;
      });
      body += "\n";
    } else {
      body += "Não há alterações desde a última notificação — esta mensagem confirma o horário atual.\n\n";
    }

    if (link) {
      body += `Pode consultar o horário atualizado aqui:\n👉 ${link}\n\n`;
    }

    body += `Qualquer dúvida, não hesite em contactar.\n\nObrigado.`;

    const subject = `Horário atualizado — ${MONTH_NAMES[month]} ${year}`;
    const mailto = `mailto:?bcc=${encodeURIComponent(recipients.join(","))}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailto;
    }, 500);

    setLastPublished((prev) => ({
      ...prev,
      [monthKey]: JSON.parse(JSON.stringify(schedule[monthKey] || {})),
    }));
  };

  // ---------- Renderização de células ----------
  const renderDayCell = (emp: string, d: number) => {
    const shift = getShift(emp, d);
    const def = shift ? SHIFT_TYPES[shift] : null;
    const isToday = d === todayDay;
    const isSelected = selectedDays.has(d);
    const isRowHighlighted = highlightedRow === emp;
    const isFocused = focusedCell?.emp === emp && focusedCell?.day === d;
    const emptyBg = isSelected ? "#FDDDD9" : isToday ? "#F0EDE6" : "#F7F5F0";
    const bg = isSelected ? "#FDDDD9" : def ? def.color : emptyBg;
    const fg = isSelected
      ? "#7A2E24"
      : def && shift && !LIGHT_SHIFTS.includes(shift)
      ? "#FFFFFF"
      : "#9A9388";
    const outline = isSelected
      ? "2px solid #B5483D"
      : undefined;
    const cellBoxShadow = isFocused
      ? "inset 0 0 0 2px #2A241C"
      : def
      ? "0 1px 3px rgba(42,36,28,0.18)"
      : undefined;
    const cellRadius = 5;
    const rowHighlightFilter = isRowHighlighted ? "brightness(0.8) saturate(1.15)" : undefined;
    const handleFocus = () => setFocusedCell({ emp, day: d });
    const handleBlur = () => setFocusedCell((prev) => (prev && prev.emp === emp && prev.day === d ? null : prev));
    const CHIP_INSET = 3;

    if (shift === "EX") {
      return (
        <div
          key={d}
          onKeyDown={(e) => handleCellKeyDown(e, emp, d)}
          onMouseDown={() => startPaint(emp, d)}
          onMouseEnter={(e) => paintOver(emp, d, e.buttons)}
          style={{
            ...styles.dayCell,
            position: "relative" as const,
            background: isRowHighlighted ? "#E3D9BE" : "transparent",
            outline,
            outlineOffset: outline ? "-2px" : undefined,
          }}
        >
          <div
            style={{
              ...styles.exCell,
              position: "absolute" as const,
              inset: CHIP_INSET,
              background: isSelected ? "#FDDDD9" : def!.color,
              boxShadow: cellBoxShadow,
              borderRadius: cellRadius,
              filter: rowHighlightFilter,
              overflow: "hidden",
            }}
          >
            <button
              className="cell-btn"
              data-emp={emp}
              data-day={d}
              onClick={(e) => selectMode ? toggleDay(d) : (e.currentTarget as HTMLElement).focus()}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ ...styles.exLabel, color: isSelected ? "#7A2E24" : fg }}
              title={selectMode ? (isSelected ? "Desselecionar" : "Selecionar") : "Extra — clique e escreva a sigla para mudar (Ctrl+C/V para copiar/colar)"}
            >
              {isSelected ? "✕" : "EX"}
            </button>
            {!isSelected && (
              <input
                type="number"
                min="0"
                max="24"
                step="0.5"
                className="no-print"
                value={getExtraHours(emp, d)}
                onChange={(e) => setExtraHoursValue(emp, d, e.target.value)}
                onClick={(e) => e.stopPropagation()}
                style={styles.exInput}
                aria-label={`Horas extra de ${emp} no dia ${d}`}
                title="Quantas horas extra"
              />
            )}
          </div>
        </div>
      );
    }

    return (
      <button
        key={d}
        className="cell-btn"
        data-emp={emp}
        data-day={d}
        onClick={(e) => selectMode ? toggleDay(d) : (e.currentTarget as HTMLElement).focus()}
        onKeyDown={(e) => handleCellKeyDown(e, emp, d)}
        onMouseDown={() => startPaint(emp, d)}
        onMouseEnter={(e) => paintOver(emp, d, e.buttons)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          ...styles.dayCell,
          position: "relative" as const,
          background: isRowHighlighted ? "#E3D9BE" : "transparent",
          outline,
          outlineOffset: outline ? "-2px" : undefined,
          borderRight: "1px solid #EFEAE2",
        }}
        title={selectMode ? (isSelected ? "Desselecionar" : "Selecionar") : def ? `${def.label} — escreva a sigla para mudar (Ctrl+C/V para copiar/colar)` : "Sem turno — clique e escreva a sigla (ex: M, T, N, EX...)"}
      >
        <span
          style={{
            position: "absolute" as const,
            inset: CHIP_INSET,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: bg,
            color: fg,
            fontSize: "inherit",
            fontWeight: "inherit",
            fontFamily: "inherit",
            borderRadius: cellRadius,
            boxShadow: cellBoxShadow,
            filter: rowHighlightFilter,
          }}
        >
          {isSelected ? "✕" : shift || "—"}
        </span>
      </button>
    );
  };

  const renderStatHeaderCells = () => (
    <>
      <div style={{ ...styles.statCell, ...styles.headerCell, ...styles.statHeaderLabel }}>Dias</div>
      <div style={{ ...styles.statCell, ...styles.headerCell, ...styles.statHeaderLabel }}>Horas</div>
      <div style={{ ...styles.statCell, ...styles.headerCell, ...styles.statHeaderLabel }}>Faltas</div>
      <div style={{ ...styles.statCell, ...styles.headerCell, ...styles.statHeaderLabel }}>H.Extra</div>
      <div style={{ ...styles.statCell, ...styles.headerCell, ...styles.statHeaderLabel }}>Total</div>
    </>
  );

  const renderStatCells = (emp: string) => {
    const t = employeeTotals[emp] || { hours: 0, daysWorked: 0, absences: 0, extra: 0, total: 0 };
    const highlightStyle = highlightedRow === emp ? { background: "#E3D9BE" } : {};
    return (
      <>
        <div style={{ ...styles.statCell, ...highlightStyle }}>
          <span style={styles.statValue}>{t.daysWorked ?? 0}</span>
        </div>
        <div style={{ ...styles.statCell, ...highlightStyle }}>
          <span style={styles.statValue}>{t.hours ?? 0}h</span>
        </div>
        <div style={{ ...styles.statCell, ...highlightStyle }}>
          {t.absences > 0 ? (
            <span style={styles.absenceBadge}>{t.absences}</span>
          ) : (
            <span style={styles.statValueMuted}>0</span>
          )}
        </div>
        <div style={{ ...styles.statCell, ...highlightStyle }}>
          {t.extra > 0 ? (
            <span style={{ ...styles.statValue, color: SHIFT_TYPES.EX.color }}>{t.extra}h</span>
          ) : (
            <span style={styles.statValueMuted}>0h</span>
          )}
        </div>
        <div style={{ ...styles.statCell, ...highlightStyle }}>
          <span style={styles.totalValue}>{t.total ?? 0}h</span>
        </div>
      </>
    );
  };

  const renderEmployeeRow = (emp: string, _group: "rv" | "main") => {
    const av = getAvatar(emp);
    const isHighlighted = highlightedRow === emp;
    return (
      <div key={emp} style={styles.row}>
        <div style={{ ...styles.nameCell, position: "sticky", left: 0, zIndex: 2, background: isHighlighted ? "#E3D9BE" : "#FFFFFF" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, overflow: "hidden" }}>
            <div style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: av.bg,
              color: av.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              flexShrink: 0,
            }}>
              {av.initials}
            </div>
            <button
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: "#2A241C", textAlign: "left" as const, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}
              onClick={() => setHighlightedRow((prev) => (prev === emp ? null : emp))}
              onDoubleClick={() => setOpenProfile(emp)}
              title="1 clique para destacar a linha · 2 cliques para ver a ficha"
            >
              {emp}
            </button>
          </div>
        </div>
        {days.map((d) => renderDayCell(emp, d))}
        {renderStatCells(emp)}
      </div>
    );
  };

  const gridMinWidth = 150 + numDays * 40 + 210;
  const isHomePage = (activePage as string) === "home";
  const isStockPage = (activePage as string) === "stock";

  const navigateHome = () => {
    const el = document.querySelector(".page-enter") as HTMLElement;
    if (el) {
      el.style.animation = "slideDown 0.38s cubic-bezier(0.32, 0.72, 0, 1) both";
      setTimeout(() => setActivePage("home"), 360);
    } else {
      setActivePage("home");
    }
  };

  // ---------- Aniversários de utentes ----------
  const birthdayAlerts = useMemo(() => {
    const alerts: { name: string; age: number; isToday: boolean; isTomorrow: boolean; photo?: string }[] = [];
    const now = today;
    const todayDay = now.getDate();
    const todayMonth = now.getMonth() + 1;
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowDay = tomorrowDate.getDate();
    const tomorrowMonth = tomorrowDate.getMonth() + 1;

    // Aceder aos utentes do localStorage diretamente
    const storedUtentes = loadUtentesData()?.utentes ?? [];
    storedUtentes.forEach((u: any) => {
      if (!u.birthDate) return;
      const parts = u.birthDate.split("/");
      if (parts.length !== 3) return;
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const birthYear = parseInt(parts[2]);
      if (isNaN(day) || isNaN(month) || isNaN(birthYear)) return;
      const age = now.getFullYear() - birthYear + (month < todayMonth || (month === todayMonth && day <= todayDay) ? 0 : -1) + 1;
      const isToday = day === todayDay && month === todayMonth;
      const isTomorrow = day === tomorrowDay && month === tomorrowMonth;
      if (isToday || isTomorrow) {
        alerts.push({ name: u.name, age: isToday ? age : age, isToday, isTomorrow, photo: u.photo });
      }
    });
    return alerts;
  }, [today]);

  // ---------- Pesquisa rápida universal ----------
  const quickSearchResults = useMemo(() => {
    const term = quickSearch.trim().toLowerCase();
    if (!term) return [];
    const results: { type: "utente" | "colaborador"; name: string; photo?: string }[] = [];

    // Colaboradores (escala + recibo verde)
    [...employees, ...rvEmployees].forEach((name) => {
      if (name.toLowerCase().includes(term)) {
        results.push({ type: "colaborador", name });
      }
    });

    // Utentes (do localStorage)
    const storedUtentes = loadUtentesData()?.utentes ?? [];
    storedUtentes.forEach((u: any) => {
      if (u.name?.toLowerCase().includes(term)) {
        results.push({ type: "utente", name: u.name, photo: u.photo });
      }
    });

    return results.slice(0, 8);
  }, [quickSearch, employees, rvEmployees]);
  const isUtentesPage = (activePage as string) === "utentes";
  const isSchedulePage = (activePage as string) === "schedule";

  // Dia de hoje neste mês/ano (null se estamos a ver outro mês)
  const todayDay = today.getFullYear() === year && today.getMonth() === month
    ? today.getDate()
    : null;

  const renderDayHeaderCells = () =>
    days.map((d) => {
      const date = new Date(year, month, d);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isToday = d === todayDay;
      const isSelected = selectedDays.has(d);
      const bg = isSelected
        ? "#B5483D"
        : isToday
        ? "#5A5348"
        : isWeekend
        ? "#F4EFE6"
        : "#FBF9F5";
      return (
        <div
          key={d}
          onClick={selectMode ? () => toggleDay(d) : undefined}
          style={{
            ...styles.dayHeaderCell,
            background: bg,
            cursor: selectMode ? "pointer" : "default",
            userSelect: "none" as const,
          }}
          title={selectMode ? (isSelected ? "Desselecionar dia" : "Selecionar dia") : undefined}
        >
          <div style={{
            ...styles.dayNum,
            color: isSelected || isToday ? "#FFFFFF" : "#2A241C",
          }}>
            {isSelected ? "✓" : d}
          </div>
          <div style={{
            ...styles.dayLetter,
            color: isSelected ? "#FFCCC7" : isToday ? "#C2BAAC" : "#A39B8E",
          }}>{WEEKDAY_LETTERS[date.getDay()]}</div>
        </div>
      );
    });

  // Se houver código de família na URL, mostra só a página pública e ignora o resto da app
  if (familyCode) {
    return <FamilyPage code={familyCode} />;
  }

  // Acesso público ao horário individual do colaborador, via QR code
  if (colaboradorCodeParam) {
    return <ColaboradorSchedulePage code={colaboradorCodeParam} />;
  }

  // Acesso público ao mapa geral da equipa, via QR code
  if (isMapaGeralParam) {
    return <MapaGeralPage />;
  }

  // Acesso interno da equipa requer login
  if (!currentUser) {
    return <LoginScreen users={appUsersList} onLogin={setCurrentUser} />;
  }

  return (
    <div style={{ ...styles.page, background: isHomePage ? "#1E3A1E" : "#1E3A1E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: #1E3A1E; }
        .cell-btn { transition: transform 0.08s ease, box-shadow 0.12s ease; }
        .cell-btn:hover { transform: scale(1.05); }
        .cell-btn:active { transform: scale(0.97); }
        .cell-btn:focus { outline: none; }
        .scroll-x { -webkit-user-select: none; user-select: none; }
        .scroll-x::-webkit-scrollbar { height: 6px; }
        .scroll-x::-webkit-scrollbar-thumb { background: #D9D4CC; border-radius: 3px; }
        .icon-btn:hover { background: #EFEAE2; }
        .add-btn:hover { background: #1F1B16; }
        .nav-btn:hover { background: #EFEAE2; border-radius: 6px; }
        .tool-btn:hover { background: #EFEAE2 !important; }
        .tool-btn-active { background: #F5B944 !important; color: #2A241C !important; }
        .tool-btn-active:hover { background: #F0AF30 !important; }
        .print-menu-item:hover { background: #F7F5F0; }
        @keyframes monthFade {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .month-fade { animation: monthFade 0.28s cubic-bezier(0.32, 0.72, 0, 1) both; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatWord {
          0%   { opacity: 0;    transform: scale(0.5); }
          50%  { opacity: 0.16; transform: scale(1.15); }
          100% { opacity: 0;    transform: scale(1.6); }
        }
        .floating-word {
          position: absolute;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          color: #F5EFD8;
          pointer-events: none;
          white-space: nowrap;
          animation-name: floatWord;
          animation-duration: 9s;
          animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes treeSway {
          0%, 100% { transform: rotate(-2.5deg); }
          50% { transform: rotate(2.5deg); }
        }
        @keyframes slideUp {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slideDown {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
        .page-enter {
          position: fixed; inset: 0;
          z-index: 100; overflow-y: auto;
          will-change: transform;
          animation: slideUp 0.42s cubic-bezier(0.32, 0.72, 0, 1) both;
        }
        .page-exit {
          position: fixed; inset: 0;
          z-index: 100; overflow-y: auto;
          will-change: transform;
          animation: slideDown 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
        }
        .utente-avatar { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; }
        .utente-avatar:hover { transform: scale(2); box-shadow: 0 8px 24px rgba(0,0,0,0.2); z-index: 10; position: relative; }
        .stock-card { box-shadow: 0 1px 3px rgba(42,36,28,0.08); transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .stock-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(42,36,28,0.14); }
        .stock-filter-btn:hover { transform: translateY(-1px); box-shadow: 0 2px 6px rgba(42,36,28,0.1); }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }

        /* ===== RESPONSIVO MOBILE ===== */
        @media (max-width: 768px) {
          /* Home */
          .home-grid { display: flex !important; flex-direction: column !important; grid-template-columns: none !important; max-width: 300px !important; width: 88% !important; margin: 0 auto !important; gap: 10px !important; }
          .home-btn { width: 100% !important; padding: 14px 16px !important; border-radius: 14px !important; flex-direction: row !important; gap: 12px !important; justify-content: flex-start !important; box-sizing: border-box !important; }
          .home-btn-icon { width: 42px !important; height: 42px !important; border-radius: 11px !important; flex-shrink: 0 !important; }
          .home-btn-icon svg { width: 21px !important; height: 21px !important; }
          .home-btn-label { font-size: 13px !important; }
          .home-title { font-size: 15px !important; padding: 0 20px; line-height: 1.3 !important; }
          .home-icon-wrap { width: 44px !important; height: 44px !important; margin-bottom: 12px !important; }
          .home-icon-wrap svg { width: 22px !important; height: 22px !important; }
          .home-center { margin-bottom: 14px !important; }

          /* Card de aniversário */
          .bday-card { padding: 12px 14px !important; gap: 10px !important; border-radius: 14px !important; }
          .bday-avatar { width: 44px !important; height: 44px !important; font-size: 22px !important; }
          .bday-name { font-size: 14px !important; margin-bottom: 2px !important; }
          .bday-msg { font-size: 11px !important; }
          .bday-age { font-size: 22px !important; }

          /* Header geral de todas as páginas */
          .header-right-mobile { width: 100% !important; flex-wrap: wrap !important; gap: 4px !important; justify-content: flex-start !important; }

          /* Grelhas */
          .summary-grid-mobile { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .utentes-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .stock-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }

          /* Painéis laterais ocupam ecrã todo */
          .side-panel-mobile { width: 100vw !important; }

          /* Toolbar e botões em geral mais compactos */
          .tool-btn { padding: 5px 8px !important; font-size: 11px !important; }
        }

        @media (max-width: 480px) {
          /* Home ainda mais compacta */
          .home-grid { max-width: 280px !important; gap: 8px !important; }
          .home-btn { padding: 11px 12px !important; gap: 10px !important; }
          .home-btn-icon { width: 36px !important; height: 36px !important; }
          .home-btn-icon svg { width: 18px !important; height: 18px !important; }
          .home-btn-label { font-size: 12px !important; }
          .home-title { font-size: 13px !important; line-height: 1.25 !important; }
          .home-icon-wrap { width: 40px !important; height: 40px !important; margin-bottom: 8px !important; }
          .home-icon-wrap svg { width: 20px !important; height: 20px !important; }
          .bday-card { padding: 10px 12px !important; }
          .bday-avatar { width: 38px !important; height: 38px !important; font-size: 18px !important; }
          .bday-name { font-size: 13px !important; }
          .bday-msg { font-size: 10px !important; }
          .bday-age { font-size: 18px !important; }

          /* Grelhas em 1 coluna no ecrã muito pequeno */
          .utentes-grid { grid-template-columns: 1fr !important; }
          .stock-grid { grid-template-columns: 1fr !important; }
          .summary-grid-mobile { grid-template-columns: 1fr !important; }
        }

        /* Aplica-se a toda a app independentemente do breakpoint específico */
        @media (max-width: 768px) {
          body { font-size: 14px; }
          h1 { font-size: 18px !important; }

          /* Tabela/grelha de turnos com scroll horizontal suave */
          .schedule-table-wrap { overflow-x: auto !important; -webkit-overflow-scrolling: touch; }

          /* Modal e painéis com padding reduzido */
          .modal-mobile { padding: 16px !important; }

          /* Botões de toolbar quebram em várias linhas */
          .toolbar-wrap { flex-wrap: wrap !important; row-gap: 6px !important; }
        }
      `}</style>

      {/* Página inicial */}
      {true && (
        <div style={{ position: "fixed" as const, inset: 0, background: "#1E3A1E", display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" }}>

          {/* Logo SVG marca de água — canto superior esquerdo, triplicado, com balanço suave */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" as const, top: -120, left: -120, width: 780, height: 780, opacity: 0.15, pointerEvents: "none" as const }}>
            <circle cx="50" cy="50" r="48" fill="#4A8A4A"/>
            <rect x="46" y="62" width="8" height="22" rx="3" fill="white"/>
            <path d="M46 80 Q36 82 30 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M54 80 Q64 82 70 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Copa — anima com balanço suave, ponto de origem na base do tronco */}
            <g style={{ transformOrigin: "50px 62px", animation: "treeSway 6s ease-in-out infinite" }}>
              <ellipse cx="50" cy="40" rx="16" ry="20" fill="white"/>
              <ellipse cx="34" cy="47" rx="13" ry="16" fill="white" transform="rotate(-15 34 47)"/>
              <ellipse cx="66" cy="47" rx="13" ry="16" fill="white" transform="rotate(15 66 47)"/>
              <ellipse cx="50" cy="24" rx="10" ry="14" fill="white"/>
            </g>
          </svg>

          {/* Palavras flutuantes — movimento suave em loop */}
          {(() => {
            const wordSets = [
              ["Amor", "Família", "Cuidado", "Gratidão", "Memórias", "Acolhimento"],
              ["Carinho", "Sabedoria", "Sorrisos", "Acolhimento", "Companhia", "Ternura"],
              ["Ternura", "Respeito", "Histórias", "Abraços", "Serenidade", "Amizade"],
            ];
            const positions = [
              { top: "10%", left: "62%", size: 112, color: "#F5EFD8" },
              { top: "78%", left: "68%", size: 72, color: "#E8D5A0" },
              { top: "45%", left: "82%", size: 100, color: "#A8C5A0" },
              { top: "8%", left: "86%", size: 60, color: "#D9C9E8" },
              { top: "68%", left: "4%", size: 84, color: "#F0C5A8" },
              { top: "30%", left: "16%", size: 50, color: "#C9E0D9" },
            ];
            const cycleDuration = 9; // segundos por palavra

            return positions.map((pos, i) => (
              <span
                key={i}
                className="floating-word-cycle"
                style={{
                  position: "absolute" as const,
                  top: pos.top, left: pos.left,
                  fontSize: pos.size,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  color: pos.color,
                  pointerEvents: "none" as const,
                  whiteSpace: "nowrap" as const,
                  animationName: "floatWord",
                  animationDuration: `${cycleDuration}s`,
                  animationTimingFunction: "cubic-bezier(0.45, 0, 0.55, 1)",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 1.8}s`,
                  willChange: "transform, opacity",
                }}
              >
                <FloatingWordCycler words={wordSets.map((set) => set[i])} interval={cycleDuration * 1000} delay={i * 1800} />
              </span>
            ));
          })()}

          {/* Marca de água 4Trevo — canto inferior direito */}
          <div style={{ position: "absolute" as const, bottom: 16, right: 20, display: "flex", alignItems: "center", gap: 0, opacity: 0.3, pointerEvents: "none" as const, zIndex: 0 }}>
            <svg width="36" height="40" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(150,160) rotate(60)">
                <path d="M0,-4 C-4,-12 -18,-14 -30,-28 C-44,-44 -42,-68 -22,-76 C-4,-82 14,-72 18,-54 C22,-38 12,-18 0,-4Z" fill="none" stroke="white" strokeWidth="4.5" strokeLinejoin="round"/>
                <path d="M4,0 C12,-4 14,-18 28,-30 C44,-44 68,-42 76,-22 C82,-4 72,14 54,18 C38,22 18,12 4,0Z" fill="none" stroke="white" strokeWidth="4.5" strokeLinejoin="round"/>
                <path d="M0,4 C4,12 18,14 30,28 C44,44 42,68 22,76 C4,82 -14,72 -18,54 C-22,38 -12,18 0,4Z" fill="none" stroke="white" strokeWidth="4.5" strokeLinejoin="round"/>
                <path d="M-4,0 C-12,4 -14,18 -28,30 C-44,44 -68,42 -76,22 C-82,4 -72,-14 -54,-18 C-38,-22 -18,-12 -4,0Z" fill="none" stroke="white" strokeWidth="4.5" strokeLinejoin="round"/>
                <line x1="2" y1="-2" x2="44" y2="-44" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="2" y1="2" x2="44" y2="44" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="-2" y1="2" x2="-44" y2="44" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="-2" y1="-2" x2="-44" y2="-44" stroke="white" strokeWidth="1" opacity="0.6"/>
                <circle cx="0" cy="0" r="4" fill="none" stroke="white" strokeWidth="2"/>
                <path d="M8,82 C10,100 6,120 0,142" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
              </g>
            </svg>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1 }}>4Trevo</span>
          </div>

          {/* Sessão / logout */}
          <div style={{ position: "absolute" as const, top: 16, right: 20, display: "flex", alignItems: "center", gap: 10, zIndex: 2 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>{currentUser.username}</span>
            <button
              onClick={() => setShowChangePassword(true)}
              style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer", color: "#FFFFFF", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
              title="Alterar a tua password"
            >
              Alterar password
            </button>
            <button
              onClick={() => setCurrentUser(null)}
              style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer", color: "#FFFFFF", fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
              title="Terminar sessão"
            >
              Sair
            </button>
          </div>

          {/* Modal de alterar password */}
          {showChangePassword && (
            <div
              style={{ position: "fixed" as const, inset: 0, background: "rgba(20,18,14,0.5)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
              onClick={() => { setShowChangePassword(false); setChangePasswordError(""); setChangePassCurrent(""); setChangePassNew(""); setChangePassConfirm(""); }}
            >
              <div
                style={{ background: "#FFFFFF", borderRadius: 20, padding: 28, width: "100%", maxWidth: 360, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, margin: "0 0 16px", color: "#2A241C" }}>
                  Alterar password
                </h3>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 }}>Password atual</label>
                <input
                  type="password"
                  autoFocus
                  value={changePassCurrent}
                  onChange={(e) => setChangePassCurrent(e.target.value)}
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 14, colorScheme: "light" as const }}
                />
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 }}>Nova password</label>
                <input
                  type="password"
                  value={changePassNew}
                  onChange={(e) => setChangePassNew(e.target.value)}
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 14, colorScheme: "light" as const }}
                />
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5 }}>Confirmar nova password</label>
                <input
                  type="password"
                  value={changePassConfirm}
                  onChange={(e) => setChangePassConfirm(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleChangePassword(changePassCurrent, changePassNew, changePassConfirm); }}
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: changePasswordError ? 10 : 20, colorScheme: "light" as const }}
                />
                {changePasswordError && <div style={{ color: "#C2554A", fontSize: 12, marginBottom: 14 }}>{changePasswordError}</div>}
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => { setShowChangePassword(false); setChangePasswordError(""); setChangePassCurrent(""); setChangePassNew(""); setChangePassConfirm(""); }}
                    style={{ flex: 1, background: "transparent", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleChangePassword(changePassCurrent, changePassNew, changePassConfirm)}
                    style={{ flex: 1, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo centrado */}
          <div style={{ position: "relative" as const, zIndex: 1, width: "100%", maxWidth: 680, padding: "0 24px" }}>

            {/* Título */}
            <div className="home-center" style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <button
                className="home-icon-wrap"
                onClick={syncFromSupabase}
                disabled={syncStatus === "syncing"}
                style={{
                  width: 80, height: 80, borderRadius: 24,
                  background: syncStatus === "syncing" ? "rgba(91,168,232,0.18)" : syncStatus === "error" ? "rgba(226,108,90,0.18)" : "rgba(255,255,255,0.12)",
                  border: `1px solid ${syncStatus === "syncing" ? "rgba(91,168,232,0.4)" : syncStatus === "error" ? "rgba(226,108,90,0.4)" : "rgba(255,255,255,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
                  cursor: syncStatus === "syncing" ? "default" : "pointer", padding: 0,
                  animation: syncStatus === "syncing" ? "spin 1s linear infinite" : undefined,
                  transition: "background 0.3s ease, border-color 0.3s ease, transform 0.15s",
                }}
                title={
                  syncStatus === "synced" ? "Sincronizado — clique para atualizar" :
                  syncStatus === "syncing" ? "A sincronizar..." :
                  syncStatus === "error" ? "Sem ligação — clique para tentar" : "Clique para sincronizar"
                }
                onMouseEnter={(e) => { if (syncStatus !== "syncing") (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={syncStatus === "syncing" ? "#5BA8E8" : syncStatus === "error" ? "#E26C5A" : "#F5B944"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }}>
                  <path d="M3 21V7l9-4 9 4v14"/>
                  <path d="M9 21V13h6v8"/>
                  <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
                </svg>
              </button>
              <h1 className="home-title" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 8px", color: "#FFFFFF" }}>
                Associação Oliveirense de Socorros Mútuos
              </h1>
              <p style={{ fontSize: 14, color: "#8FBF8F", margin: "0 0 18px" }}>Complexo Intergeracional Quinta dos Avós</p>

              {/* Pesquisa rápida universal */}
              <div style={{ position: "relative" as const, maxWidth: 380, margin: "0 auto" }}>
                <input
                  value={quickSearch}
                  onChange={(e) => { setQuickSearch(e.target.value); setQuickSearchOpen(true); setQuickSearchHighlight(-1); }}
                  onFocus={() => setQuickSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (!quickSearchOpen || quickSearchResults.length === 0) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setQuickSearchHighlight((prev) => (prev + 1) % quickSearchResults.length);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setQuickSearchHighlight((prev) => (prev <= 0 ? quickSearchResults.length - 1 : prev - 1));
                    } else if (e.key === "Enter") {
                      e.preventDefault();
                      const chosen = quickSearchResults[quickSearchHighlight] ?? quickSearchResults[0];
                      if (chosen) {
                        setQuickSearchTarget(chosen);
                        setQuickSearchOpen(false);
                        setQuickSearch("");
                        setQuickSearchHighlight(-1);
                      }
                    } else if (e.key === "Escape") {
                      setQuickSearchOpen(false);
                      setQuickSearchHighlight(-1);
                    }
                  }}
                  placeholder="🔍 Pesquisar colaborador ou utente..."
                  style={{
                    width: "100%", boxSizing: "border-box" as const,
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 14, padding: "10px 16px", fontSize: 13, fontFamily: "'Inter', sans-serif",
                    outline: "none", color: "#FFFFFF", colorScheme: "dark" as const,
                  }}
                />
                {quickSearchOpen && quickSearch.trim() && (
                  <div style={{
                    position: "absolute" as const, top: "calc(100% + 6px)", left: 0, right: 0,
                    background: "#FFFFFF", borderRadius: 14, boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
                    maxHeight: 280, overflowY: "auto" as const, zIndex: 50, textAlign: "left" as const,
                  }}>
                    {quickSearchResults.length === 0 ? (
                      <div style={{ padding: "16px", fontSize: 13, color: "#A39B8E", textAlign: "center" as const }}>Nenhum resultado encontrado</div>
                    ) : quickSearchResults.map((r, idx) => (
                      <button
                        key={r.type + r.name}
                        onClick={() => { setQuickSearchTarget(r); setQuickSearchOpen(false); setQuickSearch(""); setQuickSearchHighlight(-1); }}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 14px", border: "none", background: idx === quickSearchHighlight ? "#F7F5F0" : "transparent", cursor: "pointer",
                          borderBottom: "1px solid #F0EDE6", textAlign: "left" as const,
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F7F5F0"; setQuickSearchHighlight(idx); }}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = idx === quickSearchHighlight ? "#F7F5F0" : "transparent"}
                      >
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                          background: r.type === "utente" ? "#E8EEF5" : "#F0E8D5",
                          color: r.type === "utente" ? "#3A5A70" : "#B08A4E",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 12, fontWeight: 700, overflow: "hidden",
                        }}>
                          {r.photo ? <img src={r.photo} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : r.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#2A241C", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: "#A39B8E" }}>{r.type === "utente" ? "Utente" : "Colaborador"}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Aniversários */}
            {birthdayAlerts.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                {birthdayAlerts.map((alert, idx) => (
                  <div key={idx} className="bday-card" style={{
                    background: alert.isToday ? "linear-gradient(135deg, #FFF8E1, #FCE4EC)" : "linear-gradient(135deg, #F3F8FF, #EDE7F6)",
                    border: `2px solid ${alert.isToday ? "#FFD54F" : "#B39DDB"}`,
                    borderRadius: 20, padding: "20px 24px", display: "flex", alignItems: "center", gap: 18, marginBottom: 12,
                  }}>
                    <div className="bday-avatar" style={{ width: 64, height: 64, borderRadius: "50%", flexShrink: 0, background: alert.isToday ? "#FFD54F" : "#B39DDB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, overflow: "hidden", boxShadow: alert.isToday ? "0 4px 12px rgba(255,213,79,0.4)" : "0 4px 12px rgba(179,157,219,0.4)", animation: alert.isToday ? "bounce 1s infinite" : undefined }}>
                      {alert.photo
                        ? <img src={alert.photo} alt={alert.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : (alert.isToday ? "🎂" : "🎁")
                      }
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="bday-name" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#2A241C", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{alert.name}</div>
                      <div className="bday-msg" style={{ fontSize: 14, color: "#6B6358", fontWeight: 500 }}>{alert.isToday ? `🎉 Hoje faz ${alert.age} anos! Parabéns!` : `🔔 Amanhã faz ${alert.age} anos`}</div>
                    </div>
                    <div className="bday-age" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: alert.isToday ? "#F9A825" : "#7E57C2", lineHeight: 1, flexShrink: 0 }}>{alert.age}</div>
                  </div>
                ))}
              </div>
            )}

            {/* 3 botões */}
            <div className="home-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {canAccessPage(currentUser, "utentes") && (
              <button onClick={() => setActivePage("utentes")} className="home-btn"
                style={{ background: "#FFFFFF", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 28, padding: "36px 16px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 16, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08) translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(91,141,190,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}>
                <div style={{ width: 59, height: 59, borderRadius: 18, background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconUserCircle size={29} color="#3A5A70" />
                </div>
                <div className="home-btn-label" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                  Utentes
                </div>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: "#5B8DBE" }} />
              </button>
              )}

              {canAccessPage(currentUser, "schedule") && (
              <button onClick={() => setActivePage("schedule")} className="home-btn"
                style={{ background: "#FFFFFF", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 28, padding: "36px 16px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 16, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08) translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(232,177,74,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}>
                <div style={{ width: 59, height: 59, borderRadius: 18, background: "#F0E8D5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconUsers size={29} color="#B08A4E" />
                </div>
                <div className="home-btn-label" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                  Colaboradores
                </div>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: "#E8B14A" }} />
              </button>
              )}

              {canAccessPage(currentUser, "stock") && (
              <button onClick={() => setActivePage("stock")} className="home-btn"
                style={{ background: "#FFFFFF", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 28, padding: "36px 16px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 16, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08) translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(111,168,111,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}>
                <div style={{ width: 59, height: 59, borderRadius: 18, background: "#E8F0E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconBox size={29} color="#3B6D11" />
                </div>
                <div className="home-btn-label" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                  Stock
                </div>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: "#6FA86F" }} />
              </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Painel de detalhe da pesquisa rápida */}
      {quickSearchTarget && (
        <QuickSearchPanel
          target={quickSearchTarget}
          schedule={schedule}
          onClose={() => setQuickSearchTarget(null)}
        />
      )}

      {/* Página de stock */}
      {isStockPage && (
        <div className="page-enter" style={{ background: "#E8F0E8" }}>
          <StockPage key={`stock-${syncDone}`} onBack={() => navigateHome()} />
        </div>
      )}

      {/* Página de utentes */}
      {isUtentesPage && (
        <div className="page-enter" style={{ background: "#E8EEF5" }}>
          <UtentesPage key={`utentes-${syncDone}`} onBack={() => navigateHome()} onGerarERPI={handleGerarRelatorioERPI} />
        </div>
      )}

      {isSchedulePage && (
      <div className="page-enter" style={{ background: "#F5EDD8" }}>
      <>

      <header style={styles.header}>
        {/* Voltar + ícone de colaboradores */}
        <div style={styles.logoWrap}>
          <button
            onClick={() => navigateHome()}
            style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "7px 12px", cursor: "pointer", color: "#6B6358", fontSize: 13, fontWeight: 600, fontFamily: "'Inter', sans-serif", flexShrink: 0 }}
            onMouseEnter={(e) => showTip(e, "Voltar ao início")}
            onMouseLeave={hideTip}
          >
            <IconChevronLeft size={16} /> Voltar
          </button>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "#F0E8D5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconUsers size={20} color="#B08A4E" />
          </div>
          <div>
            <div style={styles.logoTitle}>Colaboradores</div>
            <div style={styles.logoSub}>
              {syncStatus === "syncing" && <span style={{ color: "#E8B14A" }}>⟳ A sincronizar...</span>}
              {syncStatus === "synced" && <span style={{ color: "#6FA86F" }}>✓ Sincronizado</span>}
              {syncStatus === "error" && <span style={{ color: "#C2554A" }}>⚠ Sem ligação</span>}
              {syncStatus === "idle" && <span>Escala de turnos</span>}
            </div>
          </div>
        </div>

        {/* Navegação de mês + toolbar */}
        <div style={styles.headerRight} className="no-print header-right-mobile">
          <div style={styles.monthNav}>
            <button className="nav-btn" style={styles.navBtnCompact} onClick={goPrevMonth} aria-label="Mês anterior">
              <IconChevronLeft size={16} />
            </button>
            <div style={styles.monthLabel}>{MONTH_NAMES[month]} {year}</div>
            <button className="nav-btn" style={styles.navBtnCompact} onClick={goNextMonth} aria-label="Mês seguinte">
              <IconChevronRight size={16} />
            </button>
          </div>

          <div className="toolbar-wrap" style={styles.toolbar}>
            {/* Borracha */}
            <button
              className={`tool-btn${selectMode ? " tool-btn-active" : ""}`}
              style={{ ...styles.toolBtn }}
              onClick={toggleSelectMode}
              onMouseEnter={(e) => showTip(e, selectMode ? "Cancelar seleção" : "Selecionar dias para apagar")}
              onMouseLeave={hideTip}
              aria-label="Apagar dias"
            >
              <IconEraser size={16} />
            </button>

            {/* Copiar / Colar */}
            <button
              className="tool-btn"
              style={{ ...styles.toolBtn, color: copiedMonth === monthKey ? "#B08A4E" : "#6B6358" }}
              onClick={handleCopyMonth}
              onMouseEnter={(e) => showTip(e, copiedMonth === monthKey ? "✓ Mês copiado — copiar novamente" : `Copiar horário de ${MONTH_NAMES[month]} ${year}`)}
              onMouseLeave={hideTip}
              aria-label="Copiar mês"
            >
              <IconCopy size={16} />
            </button>
            <button
              className="tool-btn"
              style={{ ...styles.toolBtn, color: copiedMonth && copiedMonth !== monthKey ? "#5B8DBE" : "#C2BAAC", cursor: copiedMonth && copiedMonth !== monthKey ? "pointer" : "default" }}
              onClick={copiedMonth && copiedMonth !== monthKey ? handlePasteMonth : undefined}
              onMouseEnter={(e) => showTip(e, copiedMonth && copiedMonth !== monthKey ? `Colar horário de ${copiedMonthLabel}` : copiedMonth === monthKey ? "Navegue para outro mês para colar" : "Copie um mês primeiro")}
              onMouseLeave={hideTip}
              aria-label="Colar mês"
            >
              <IconClipboard size={16} />
            </button>

            <div style={styles.toolDivider} />

            {/* Email / Partilhar / Link */}
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#6B6358" }} onClick={handleNotify}
              onMouseEnter={(e) => showTip(e, "Notificar colaboradores por email")} onMouseLeave={hideTip} aria-label="Notificar">
              <IconMail size={16} />
            </button>


            <div style={styles.toolDivider} />

            {/* Excel */}
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#6B6358" }} onClick={handleExportExcel}
              onMouseEnter={(e) => showTip(e, "Exportar para Excel (.csv)")} onMouseLeave={hideTip} aria-label="Excel">
              <IconFileSpreadsheet size={16} />
            </button>

            {/* Backup / Restauro */}
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#6B6358" }} onClick={handleExportBackup}
              onMouseEnter={(e) => showTip(e, "Exportar backup completo (turnos + stock)")} onMouseLeave={hideTip} aria-label="Exportar backup">
              <IconDownload size={16} />
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#6B6358" }} onClick={handleImportBackup}
              onMouseEnter={(e) => showTip(e, "Importar backup (restaurar dados)")} onMouseLeave={hideTip} aria-label="Importar backup">
              <IconUpload size={16} />
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#5B8DBE", fontWeight: 700, fontSize: 12 }} onClick={handleImportScheduleJSON}
              onMouseEnter={(e) => showTip(e, "Importar escala de JSON (gerado pelo Claude)")} onMouseLeave={hideTip} aria-label="Importar escala JSON">
              <IconDownload size={14} />&nbsp;JSON
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#3B6D11", fontWeight: 700, fontSize: 12 }} onClick={() => setShowGenerateModal(true)}
              onMouseEnter={(e) => showTip(e, "Gerar escala do próximo mês automaticamente")} onMouseLeave={hideTip} aria-label="Gerar próximo mês">
              🪄&nbsp;Gerar mês
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#7B3FA0", fontWeight: 700, fontSize: 12 }} onClick={handleGerarRelatorioUnico}
              onMouseEnter={(e) => showTip(e, "Gerar Relatório Único (obrigação anual)")} onMouseLeave={hideTip}>
              📊&nbsp;Rel. Único
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#3A5A70", fontWeight: 700, fontSize: 12 }} onClick={() => setShowMapaGeralModal(true)}
              onMouseEnter={(e) => showTip(e, "Gerar QR code do mapa geral para colaboradores")} onMouseLeave={hideTip}>
              📱&nbsp;QR Mapa
            </button>

            {/* Menu impressão/PDF (dropdown) */}
            <div style={{ position: "relative" as const }}>
              <button
                className={`tool-btn${showPrintMenu ? " tool-btn-active" : ""}`}
                style={{ ...styles.toolBtn }}
                onClick={() => setShowPrintMenu((v) => !v)}
                onMouseEnter={(e) => showTip(e, "Opções de impressão e PDF")}
                onMouseLeave={hideTip}
                aria-label="Imprimir / PDF"
              >
                <IconPrinter size={18} />
              </button>
              {showPrintMenu && (
                <>
                  <div style={styles.printMenuOverlay} onClick={() => setShowPrintMenu(false)} />
                  <div style={styles.printMenu}>
                    <button className="print-menu-item" style={styles.printMenuItem} onClick={() => { setShowPrintMenu(false); handlePrint(true); }}>
                      <IconPrinter size={14} />
                      <div>
                        <div style={styles.printMenuItemTitle}>Imprimir — Administrador</div>
                        <div style={styles.printMenuItemSub}>Com horas, faltas e totais</div>
                      </div>
                    </button>
                    <button className="print-menu-item" style={styles.printMenuItem} onClick={() => { setShowPrintMenu(false); handlePrint(false); }}>
                      <IconUsers size={14} />
                      <div>
                        <div style={styles.printMenuItemTitle}>Imprimir — Colaboradores</div>
                        <div style={styles.printMenuItemSub}>Só os turnos, sem dados pessoais</div>
                      </div>
                    </button>
                    <div style={styles.printMenuDivider} />
                    <div style={{ ...styles.printMenuItemSub, padding: "4px 14px 8px", color: "#A39B8E", fontSize: 11 }}>
                      💡 Para PDF: escolha "Guardar como PDF" na janela de impressão
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Painel de resumo */}
      <div style={styles.summaryGrid} className="no-print">
        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Colaboradores</div>
          <div style={styles.summaryValue}>{employees.length}</div>
          <div style={styles.summarySub}>+ {rvEmployees.length} recibo verde</div>
        </div>
        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Horas registadas</div>
          <div style={styles.summaryValue}>
            {Object.values(employeeTotals).reduce((acc, t) => acc + (t?.total ?? 0), 0)}h
          </div>
          <div style={styles.summarySub}>este mês</div>
        </div>
        <div style={{ ...styles.summaryCard, ...(coverageAlerts.length > 0 ? styles.summaryCardWarn : {}) }}>
          <div style={styles.summaryLabel}>Alertas de cobertura</div>
          <div style={{ ...styles.summaryValue, color: coverageAlerts.length > 0 ? "#C2554A" : undefined }}>
            {coverageAlerts.length}
          </div>
          <div style={styles.summarySub}>{coverageAlerts.length === 0 ? "sem problemas" : "dias com falta"}</div>
        </div>
        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Faltas</div>
          <div style={styles.summaryValue}>
            {Object.values(employeeTotals).reduce((acc, t) => acc + (t?.absences ?? 0), 0)}
          </div>
          <div style={styles.summarySub}>este mês</div>
        </div>
      </div>

      {/* Legend */}
      <div style={styles.legend} className="no-print">
        {SHIFT_ORDER.map((key) => (
          <div key={key} style={styles.legendItem}>
            <span style={{ ...styles.legendDot, background: SHIFT_TYPES[key].color }} />
            <span style={styles.legendText}>
              {key} · {SHIFT_TYPES[key].label}
              {key === "EX" ? " (defina as horas)" : SHIFT_TYPES[key].hours > 0 ? ` (${SHIFT_TYPES[key].hours}h)` : ""}
            </span>
          </div>
        ))}
        <div style={styles.legendHint}>Escreva a sigla (M, T, N, EX...) · Ctrl+C/V copia · arraste para pintar várias células</div>
      </div>

      {/* Barra de seleção de dias */}
      {selectMode && (
        <div style={styles.selectBar}>
          <span style={styles.selectBarText}>
            {selectedDays.size === 0
              ? "Clique nos números dos dias para os selecionar"
              : `${selectedDays.size} ${selectedDays.size === 1 ? "dia selecionado" : "dias selecionados"}`}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={styles.selectBtnSecondary} onClick={selectAllDays}>
              Selecionar todos
            </button>
            <button
              style={{
                ...styles.selectBtnPrimary,
                opacity: selectedDays.size === 0 ? 0.4 : 1,
                cursor: selectedDays.size === 0 ? "default" : "pointer",
              }}
              disabled={selectedDays.size === 0}
              onClick={() => setConfirmClear(true)}
            >
              Apagar selecionados
            </button>
            <button style={styles.selectBtnCancel} onClick={toggleSelectMode}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Alertas de cobertura insuficiente */}
      {coverageAlerts.length > 0 && (
        <div style={styles.alertBox}>
          <span style={styles.alertIcon}>⚠️</span>
          <div>
            <strong style={styles.alertTitle}>
              {coverageAlerts.length} {coverageAlerts.length === 1 ? "dia com" : "dias com"} cobertura insuficiente
            </strong>
            <div style={styles.alertList}>
              {coverageAlerts.map(({ day, shifts }) => {
                const date = new Date(year, month, day);
                const weekday = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][date.getDay()];
                return (
                  <span key={day} style={styles.alertChip}>
                    {weekday} {day}: {shifts.join(", ")}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Equipa principal */}
      <h2 style={styles.sectionTitle}>Equipa</h2>
      <div className="scroll-x" style={styles.gridWrap}>
        <div key={`main-${monthKey}`} className="month-fade" style={{ minWidth: gridMinWidth }}>
          <div style={{ ...styles.row, height: 48 }}>
            <div style={{ ...styles.nameCell, ...styles.headerCell, position: "sticky", left: 0, zIndex: 3, background: "#FBF9F5" }}>
              <IconUsers size={14} style={{ marginRight: 6, opacity: 0.5 }} />
              Funcionário
            </div>
            {renderDayHeaderCells()}
            {renderStatHeaderCells()}
          </div>
          {employees.map((emp) => renderEmployeeRow(emp, "main"))}

          {/* Coverage row */}
          <div style={{ ...styles.row, borderTop: "2px solid #E4DED3" }}>
            <div style={{ ...styles.nameCell, position: "sticky", left: 0, zIndex: 2, background: "#FBF9F5", fontWeight: 600, color: "#6B6358" }}>
              Cobertura M/T/N
            </div>
            {days.map((d) => {
              const c = dayCoverage[d] || { M: 0, T: 0, N: 0 };
              const mAlert = c.M < COVERAGE_MIN.M;
              const tAlert = c.T < COVERAGE_MIN.T;
              const nAlert = c.N < COVERAGE_MIN.N;
              const anyAlert = mAlert || tAlert || nAlert;
              const isToday = d === todayDay;
              return (
                <div key={d} style={{
                  ...styles.coverageCell,
                  background: anyAlert ? "#FFF0EE" : isToday ? "#F0EDE6" : "#FBF9F5",
                  borderBottom: anyAlert ? "2px solid #C2554A" : undefined,
                }}>
                  <span style={{ color: mAlert ? "#C2554A" : SHIFT_TYPES.M.color, fontWeight: mAlert ? 800 : 700 }}>{c.M}</span>
                  <span style={styles.coverageSep}>/</span>
                  <span style={{ color: tAlert ? "#C2554A" : SHIFT_TYPES.T.color, fontWeight: tAlert ? 800 : 700 }}>{c.T}</span>
                  <span style={styles.coverageSep}>/</span>
                  <span style={{ color: nAlert ? "#C2554A" : SHIFT_TYPES.N.color, fontWeight: nAlert ? 800 : 700 }}>{c.N}</span>
                </div>
              );
            })}
            <div style={styles.statCell} />
            <div style={styles.statCell} />
            <div style={styles.statCell} />
            <div style={styles.statCell} />
            <div style={styles.statCell} />
          </div>
        </div>
      </div>

      {/* Add employee */}
      <div style={styles.footer} className="no-print">
        {showAdd === "main" ? (
          <div style={styles.addForm}>
            <input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addEmployee();
                if (e.key === "Escape") {
                  setShowAdd(null);
                  setNewName("");
                }
              }}
              placeholder="Nome do colaborador"
              style={styles.input}
            />
            <button style={styles.addBtnPrimary} className="add-btn" onClick={addEmployee}>
              Adicionar
            </button>
            <button
              style={styles.cancelBtn}
              onClick={() => {
                setShowAdd(null);
                setNewName("");
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button style={styles.addBtn} className="add-btn" onClick={() => setShowAdd("main")}>
            <IconPlus size={16} />
            Adicionar colaborador
          </button>
        )}
      </div>
      {/* Recibo Verde */}
      <h2 style={styles.sectionTitle}>Colaboradores — Recibo Verde</h2>
      <div className="scroll-x" style={styles.gridWrap}>
        <div key={`rv-${monthKey}`} className="month-fade" style={{ minWidth: gridMinWidth }}>
          <div style={{ ...styles.row, height: 48 }}>
            <div style={{ ...styles.nameCell, ...styles.headerCell, position: "sticky", left: 0, zIndex: 3, background: "#FBF9F5" }}>
              <IconUsers size={14} style={{ marginRight: 6, opacity: 0.5 }} />
              Funcionário
            </div>
            {renderDayHeaderCells()}
            {renderStatHeaderCells()}
          </div>
          {rvEmployees.map((emp) => renderEmployeeRow(emp, "rv"))}
        </div>
      </div>
      <div style={styles.footer} className="no-print">
        {showAdd === "rv" ? (
          <div style={styles.addForm}>
            <input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addEmployee();
                if (e.key === "Escape") {
                  setShowAdd(null);
                  setNewName("");
                }
              }}
              placeholder="Nome do colaborador (Recibo Verde)"
              style={styles.input}
            />
            <button style={styles.addBtnPrimary} className="add-btn" onClick={addEmployee}>
              Adicionar
            </button>
            <button
              style={styles.cancelBtn}
              onClick={() => {
                setShowAdd(null);
                setNewName("");
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button style={styles.addBtnSmall} className="add-btn" onClick={() => setShowAdd("rv")}>
            <IconPlus size={14} />
            Adicionar colaborador (Recibo Verde)
          </button>
        )}
      </div>


      {/* Confirm delete modal */}
      {confirmDelete && (
        <div style={styles.overlay} onClick={() => setConfirmDelete(null)}>
          <div
            style={{
              ...styles.modal,
              position: "fixed",
              margin: 0,
              left: Math.min(Math.max(confirmDelete.x - 180, 12), window.innerWidth - 372),
              top: Math.min(confirmDelete.y, window.innerHeight - 260),
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.closeBtn} onClick={() => setConfirmDelete(null)} aria-label="Fechar">
              <IconX size={18} />
            </button>
            <h3 style={styles.modalTitle}>Remover {confirmDelete.name}?</h3>
            <p style={styles.modalText}>
              Esta ação remove o colaborador e todos os turnos atribuídos em todos os meses.
            </p>
            <div style={styles.modalActions}>
              <button style={styles.cancelBtn} onClick={() => setConfirmDelete(null)}>
                Cancelar
              </button>
              <button
                style={styles.deleteBtn}
                onClick={() => removeEmployee(confirmDelete.name, confirmDelete.group)}
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ficha do colaborador — painel lateral */}
      {openProfile && (
        <>
          <div
            style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.3)", zIndex: 50 }}
            onClick={() => setOpenProfile(null)}
          />
          <div style={{
            position: "fixed" as const,
            top: 0,
            right: 0,
            bottom: 0,
            width: 380,
            maxWidth: "100vw",
            background: "#FFFFFF",
            boxShadow: "-4px 0 24px rgba(42,36,28,0.12)",
            zIndex: 51,
            display: "flex",
            flexDirection: "column" as const,
            overflow: "hidden" as const,
          }}>
            {/* Header do painel */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #EFEAE2", display: "flex", alignItems: "center", gap: 12 }}>
              {(() => { const av = getAvatar(openProfile); return (
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: av.bg, color: av.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
                  {av.initials}
                </div>
              ); })()}
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{openProfile}</div>
                <div style={{ fontSize: 12, color: "#A39B8E", marginTop: 2 }}>Ficha do colaborador</div>
              </div>
              <button style={{ border: "none", background: "transparent", cursor: "pointer", color: "#A39B8E", padding: 4 }} onClick={() => setOpenProfile(null)}>
                <IconX size={20} />
              </button>
            </div>

            {/* Campos da ficha */}
            <div style={{ flex: 1, overflowY: "auto" as const, padding: "20px 24px" }}>
              {[
                { key: "fullName", label: "Nome completo", placeholder: "Nome completo do colaborador" },
                { key: "contact", label: "Contacto telefónico", placeholder: "Ex: 912 345 678" },
                { key: "email", label: "Email", placeholder: "email@exemplo.com" },
                { key: "category", label: "Categoria profissional", placeholder: "Ex: Auxiliar de ação direta, Enfermeiro..." },
                { key: "schedule", label: "Horário contratual", placeholder: "Ex: 40h/semana, Part-time 20h..." },
                { key: "notes", label: "Observações", placeholder: "Notas adicionais...", multiline: true },
              ].map(({ key, label, placeholder, multiline }) => {
                const profile = employeeProfiles[openProfile] || {};
                const value = (profile as any)[key] || "";
                return (
                  <div key={key} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                      {label}
                    </label>
                    {multiline ? (
                      <textarea
                        value={value}
                        onChange={(e) => setEmployeeProfiles((prev) => ({ ...prev, [openProfile]: { ...(prev[openProfile] || {}), [key]: e.target.value } }))}
                        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); setOpenProfile(null); } }}
                        placeholder={placeholder}
                        rows={3}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                      />
                    ) : (
                      <input
                        type={key === "email" ? "email" : "text"}
                        value={value}
                        onChange={(e) => setEmployeeProfiles((prev) => ({ ...prev, [openProfile]: { ...(prev[openProfile] || {}), [key]: e.target.value } }))}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpenProfile(null); }}
                        placeholder={placeholder}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const }}
                      />
                    )}
                  </div>
                );
              })}

              {/* Turno preferencial */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  Turno preferencial
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { value: "M", label: "Manhã", color: "#E8B14A" },
                    { value: "T", label: "Tarde", color: "#5B8DBE" },
                    { value: "N", label: "Noite", color: "#7E57C2" },
                  ].map((opt) => {
                    const current = employeeProfiles[openProfile]?.preferredShift;
                    const active = current === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => setEmployeeProfiles((prev) => ({ ...prev, [openProfile]: { ...(prev[openProfile] || {}), preferredShift: active ? "" : (opt.value as "M" | "T" | "N") } }))}
                        style={{
                          flex: 1, padding: "8px 0", borderRadius: 8, border: "2px solid",
                          borderColor: active ? opt.color : "#E4DED3",
                          background: active ? opt.color + "22" : "#FFFFFF",
                          color: active ? opt.color : "#6B6358",
                          fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <div style={{ fontSize: 11, color: "#A39B8E", marginTop: 5 }}>Usado pelo gerador automático de escalas para priorizar este turno.</div>
              </div>

              {/* Secção de ficheiros */}
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                    Documentos
                  </label>
                  <button
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#2A241C", fontFamily: "'Inter', sans-serif" }}
                    onClick={() => {
                      const input = document.createElement("input");
                      input.type = "file";
                      input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
                      input.multiple = true;
                      input.onchange = (e: Event) => {
                        const files = Array.from((e.target as HTMLInputElement).files || []);
                        files.forEach((file) => {
                          if (file.size > 5 * 1024 * 1024) {
                            alert(`"${file.name}" é maior que 5MB e não pode ser guardado. Use o Supabase para ficheiros maiores.`);
                            return;
                          }
                          const reader = new FileReader();
                          reader.onload = (ev) => {
                            const fileData = ev.target?.result as string;
                            setEmployeeProfiles((prev) => {
                              const profile = { ...(prev[openProfile!] || {}) };
                              const existing = profile.files || [];
                              profile.files = [...existing, {
                                name: file.name,
                                type: file.type,
                                data: fileData,
                                uploadedAt: new Date().toISOString(),
                              }];
                              return { ...prev, [openProfile!]: profile };
                            });
                          };
                          reader.readAsDataURL(file);
                        });
                      };
                      document.body.appendChild(input);
                      input.click();
                      document.body.removeChild(input);
                    }}
                  >
                    <IconUpload size={13} /> Adicionar ficheiro
                  </button>
                </div>

                {(() => {
                  const files = (employeeProfiles[openProfile!] || {}).files || [];
                  if (files.length === 0) {
                    return (
                      <div style={{ background: "#F7F5F0", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#A39B8E", textAlign: "center" as const }}>
                        Nenhum documento ainda.<br />
                        <span style={{ fontSize: 11 }}>Suporta PDF, imagens, Word (máx. 5MB)</span>
                      </div>
                    );
                  }
                  return (
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                      {files.map((file, idx) => {
                        const isImg = file.type.startsWith("image/");
                        const isPdf = file.type === "application/pdf";
                        const icon = isPdf ? "📄" : isImg ? "🖼️" : "📎";
                        const date = new Date(file.uploadedAt).toLocaleDateString("pt-PT");
                        return (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 8, padding: "10px 12px" }}>
                            <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                            <div style={{ flex: 1, overflow: "hidden" }}>
                              <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{file.name}</div>
                              <div style={{ fontSize: 11, color: "#A39B8E" }}>Adicionado em {date}</div>
                            </div>
                            <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                              <button
                                style={{ border: "none", background: "#FFFFFF", borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#5B8DBE" }}
                                title="Descarregar"
                                onClick={() => {
                                  const link = document.createElement("a");
                                  link.href = file.data;
                                  link.download = file.name;
                                  link.click();
                                }}
                              >
                                <IconDownload size={14} />
                              </button>
                              <button
                                style={{ border: "none", background: "#FFFFFF", borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#C2554A" }}
                                title="Remover ficheiro"
                                onClick={() => {
                                  if (!window.confirm(`Remover "${file.name}"?`)) return;
                                  setEmployeeProfiles((prev) => {
                                    const profile = { ...(prev[openProfile!] || {}) };
                                    profile.files = (profile.files || []).filter((_, i) => i !== idx);
                                    return { ...prev, [openProfile!]: profile };
                                  });
                                }}
                              >
                                <IconX size={14} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>

              {/* Email de notificação */}
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  Email para notificações
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 8, padding: "10px 12px" }}>
                  <IconMail size={16} color={employeeEmails[openProfile] ? "#B08A4E" : "#C2BAAC"} />
                  <span style={{ flex: 1, fontSize: 13, color: employeeEmails[openProfile] ? "#2A241C" : "#A39B8E", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>
                    {employeeEmails[openProfile] || "Sem email definido"}
                  </span>
                  <button
                    onClick={() => handleEditEmail(openProfile)}
                    style={{ border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 6, padding: "5px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#2A241C", fontFamily: "'Inter', sans-serif" }}
                  >
                    Editar
                  </button>
                </div>
                <div style={{ fontSize: 11, color: "#A39B8E", marginTop: 5 }}>Usado para enviar notificações de alterações ao horário.</div>
              </div>

              {/* QR code / link individual do horário */}
              <div style={{ marginTop: 20 }}>
                <button
                  onClick={() => handleGetColaboradorLink(openProfile)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                >
                  📱 Gerar QR code do horário
                </button>
                <div style={{ fontSize: 11, color: "#A39B8E", marginTop: 5 }}>Link só de leitura — mostra apenas o horário deste colaborador, sem precisar de login.</div>
              </div>

              {/* Remover colaborador */}
              <div style={{ marginTop: 20 }}>
                <button
                  onClick={(e) => {
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    const group: "rv" | "main" = rvEmployees.includes(openProfile) ? "rv" : "main";
                    setConfirmDelete({ name: openProfile, group, x: rect.left + rect.width / 2, y: rect.top });
                  }}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#FFF5F4", color: "#C2554A", border: "1px solid #F2C4BC", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                >
                  <IconTrash2 size={14} /> Remover colaborador
                </button>
              </div>
            </div>

            {/* Footer com indicador de auto-save */}
            <div style={{ padding: "12px 24px", borderTop: "1px solid #EFEAE2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "#A39B8E" }}>✓ Guardado automaticamente</span>
              <button
                style={{ background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                onClick={() => setOpenProfile(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de gerar próximo mês */}
      {showGenerateModal && (() => {
        let nm = month + 1, ny = year;
        if (nm > 11) { nm = 0; ny++; }
        return (
          <>
            <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.4)", zIndex: 100 }} onClick={() => setShowGenerateModal(false)} />
            <div style={{ position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(440px, 92vw)", maxHeight: "88vh", overflowY: "auto" as const, background: "#FFFFFF", borderRadius: 20, zIndex: 101, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <div style={{ padding: "20px 24px", background: "#E8F0E8", display: "flex", alignItems: "center", gap: 10, position: "sticky" as const, top: 0, zIndex: 1 }}>
                <span style={{ fontSize: 28 }}>🪄</span>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>Gerar escala automática</div>
                  <div style={{ fontSize: 12, color: "#5A7A4A" }}>{MONTH_NAMES[nm]} {ny}</div>
                </div>
              </div>

              {/* Tabs de modo */}
              <div style={{ display: "flex", gap: 6, padding: "16px 24px 0" }}>
                <button onClick={() => setGenerateMode("pattern")} style={{ flex: 1, padding: "8px 0", borderRadius: "8px 8px 0 0", border: "none", borderBottom: generateMode === "pattern" ? "2px solid #3B6D11" : "2px solid #E4DED3", background: "transparent", fontSize: 12, fontWeight: 700, color: generateMode === "pattern" ? "#3B6D11" : "#A39B8E", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                  🔁 Continuar padrão
                </button>
                <button onClick={() => setGenerateMode("rules")} style={{ flex: 1, padding: "8px 0", borderRadius: "8px 8px 0 0", border: "none", borderBottom: generateMode === "rules" ? "2px solid #3B6D11" : "2px solid #E4DED3", background: "transparent", fontSize: 12, fontWeight: 700, color: generateMode === "rules" ? "#3B6D11" : "#A39B8E", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                  ⚙️ Definir regras
                </button>
              </div>

              <div style={{ padding: 24 }}>
                {generateMode === "pattern" ? (
                  <>
                    <p style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.6, margin: "0 0 18px" }}>
                      Vou analisar o padrão de turnos de <strong>{MONTH_NAMES[month]} {year}</strong> para cada colaborador e continuar a mesma sequência rotativa em <strong>{MONTH_NAMES[nm]} {ny}</strong>.
                    </p>
                    <div style={{ background: "#E8EEF5", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#3A5A70", marginBottom: 12 }}>
                      ℹ️ Colaboradores de Recibo Verde não são incluídos — continuam a ser inseridos manualmente.
                    </div>

                    <div style={{ background: "#FFF8E1", border: "1px solid #FFE9A8", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#8A6A2E", marginBottom: 20 }}>
                      ⚠️ Reveja sempre feriados e pedidos especiais depois de gerar — o algoritmo só continua o padrão, não conhece exceções.
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={() => setShowGenerateModal(false)} style={{ flex: 1, background: "transparent", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>
                        Cancelar
                      </button>
                      <button onClick={handleGenerateNextMonth} style={{ flex: 1, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                        Gerar escala
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.6, margin: "0 0 16px" }}>
                      Vou construir a escala de <strong>{MONTH_NAMES[nm]} {ny}</strong> do zero, respeitando os mínimos por turno e a preferência de cada colaborador (definida na ficha).
                    </p>

                    {/* Mínimos por turno */}
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 16 }}>
                      {[
                        { label: "Mínimo de Manhã", value: generateMinM, setter: setGenerateMinM, color: "#E8B14A" },
                        { label: "Mínimo de Tarde", value: generateMinT, setter: setGenerateMinT, color: "#5B8DBE" },
                        { label: "Mínimo de Noite", value: generateMinN, setter: setGenerateMinN, color: "#7E57C2" },
                      ].map((row) => (
                        <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#2A241C" }}>{row.label}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <button onClick={() => row.setter(Math.max(0, row.value - 1))} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E4DED3", background: "#F7F5F0", cursor: "pointer", fontSize: 14, fontWeight: 700, color: row.color }}>−</button>
                            <span style={{ width: 24, textAlign: "center" as const, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{row.value}</span>
                            <button onClick={() => row.setter(row.value + 1)} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E4DED3", background: "#F7F5F0", cursor: "pointer", fontSize: 14, fontWeight: 700, color: row.color }}>+</button>
                          </div>
                        </div>
                      ))}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid #EFEAE2" }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#2A241C" }}>Folgas por semana</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <button onClick={() => setGenerateFolgaDays(Math.max(1, generateFolgaDays - 1))} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E4DED3", background: "#F7F5F0", cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#6B6358" }}>−</button>
                          <span style={{ width: 24, textAlign: "center" as const, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{generateFolgaDays}</span>
                          <button onClick={() => setGenerateFolgaDays(generateFolgaDays + 1)} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E4DED3", background: "#F7F5F0", cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#6B6358" }}>+</button>
                        </div>
                      </div>
                    </div>

                    <button onClick={handleAutoFillPreferences} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 0", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
                      ✨ Preencher preferências automaticamente com base no histórico
                    </button>

                    <div style={{ background: "#E8EEF5", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#3A5A70", marginBottom: 12 }}>
                      ℹ️ Colaboradores de Recibo Verde não são incluídos — continuam a ser inseridos manualmente.
                    </div>

                    <div style={{ background: "#FFF8E1", border: "1px solid #FFE9A8", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#8A6A2E", marginBottom: 20 }}>
                      ⚠️ Algoritmo simples — não substitui revisão humana. Confira a escala gerada e ajuste manualmente o que for preciso.
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={() => setShowGenerateModal(false)} style={{ flex: 1, background: "transparent", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>
                        Cancelar
                      </button>
                      <button onClick={handleGenerateByRules} style={{ flex: 1, background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
                        Gerar escala
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        );
      })()}

      {/* Tooltip flutuante */}
      {tooltip && (
        <div style={{
          position: "fixed" as const,
          left: tooltip.x,
          top: tooltip.y,
          transform: "translateX(-50%)",
          background: "#2A241C",
          color: "#FBF9F5",
          fontSize: 12,
          fontWeight: 500,
          padding: "5px 10px",
          borderRadius: 7,
          pointerEvents: "none" as const,
          zIndex: 9999,
          whiteSpace: "nowrap" as const,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}>
          {tooltip.text}
        </div>
      )}

      {/* Modal de confirmação de colar */}
      {showPasteConfirm && copiedMonth && (
        <div style={styles.overlay} onClick={() => setShowPasteConfirm(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setShowPasteConfirm(false)} aria-label="Fechar">
              <IconX size={18} />
            </button>
            <h3 style={styles.modalTitle}>Colar horário de {copiedMonthLabel}?</h3>
            <p style={styles.modalText}>
              Vai copiar os turnos de <strong>{copiedMonthLabel}</strong> para <strong>{MONTH_NAMES[month]} {year}</strong>.
              Como quer colar?
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 20 }}>
              <button
                style={{ ...styles.addBtnPrimary, textAlign: "left" as const, padding: "12px 16px" }}
                onClick={() => confirmPaste(false)}
              >
                <div style={{ fontWeight: 700, marginBottom: 2 }}>Mesclar</div>
                <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 400 }}>
                  Mantém turnos já existentes e preenche só os dias vazios
                </div>
              </button>
              <button
                style={{ ...styles.deleteBtn, textAlign: "left" as const, padding: "12px 16px" }}
                onClick={() => confirmPaste(true)}
              >
                <div style={{ fontWeight: 700, marginBottom: 2 }}>Substituir tudo</div>
                <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 400 }}>
                  Apaga o horário atual e substitui pelo copiado
                </div>
              </button>
            </div>
            <button style={styles.cancelBtn} onClick={() => setShowPasteConfirm(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmação de limpeza de dias */}
      {confirmClear && (
        <div style={styles.overlay} onClick={() => setConfirmClear(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setConfirmClear(false)} aria-label="Fechar">
              <IconX size={18} />
            </button>
            <h3 style={styles.modalTitle}>Apagar {selectedDays.size} {selectedDays.size === 1 ? "dia" : "dias"}?</h3>
            <p style={styles.modalText}>
              Isto vai apagar todos os turnos de <strong>todos os colaboradores</strong> nos dias selecionados ({Array.from(selectedDays).sort((a, b) => a - b).join(", ")}). Esta ação não pode ser desfeita.
            </p>
            <div style={styles.modalActions}>
              <button style={styles.cancelBtn} onClick={() => setConfirmClear(false)}>
                Cancelar
              </button>
              <button style={styles.deleteBtn} onClick={clearSelectedDays}>
                Apagar turnos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de link/QR code do colaborador */}
      {colaboradorLinkModal && (
        <>
          <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.4)", zIndex: 200 }} onClick={() => setColaboradorLinkModal(null)} />
          <div style={{ position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(400px, 92vw)", background: "#FFFFFF", borderRadius: 20, zIndex: 201, boxShadow: "0 20px 60px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", background: "#E8EEF5", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 26 }}>📱</span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>QR Code do Horário</div>
                <div style={{ fontSize: 12, color: "#3A5A70" }}>{colaboradorLinkModal.name}</div>
              </div>
            </div>
            <div style={{ padding: 24, textAlign: "center" as const }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(colaboradorLinkModal.link)}`}
                alt="QR code do horário"
                style={{ width: 180, height: 180, margin: "0 auto 16px", border: "1px solid #E4DED3", borderRadius: 12, padding: 8 }}
              />
              <p style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.6, margin: "0 0 14px", textAlign: "left" as const }}>
                O colaborador aponta a câmara do telemóvel para este código e vê logo o seu próprio horário — sem precisar de login.
              </p>
              <input
                readOnly
                value={colaboradorLinkModal.link}
                onFocus={(e) => e.target.select()}
                onClick={(e) => (e.target as HTMLInputElement).select()}
                style={{ width: "100%", border: "1px solid #B8CCE0", borderRadius: 10, padding: "10px 12px", fontSize: 12, fontFamily: "monospace", outline: "none", background: "#F7F9FB", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 14, colorScheme: "light" as const }}
              />
              <button
                onClick={() => setColaboradorLinkModal(null)}
                style={{ width: "100%", background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de QR code do mapa geral (PDF para colaboradores) */}
      {showMapaGeralModal && (() => {
        const mapaLink = `${window.location.origin}${window.location.pathname}?mapageral=1`;
        return (
          <>
            <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.4)", zIndex: 200 }} onClick={() => setShowMapaGeralModal(false)} />
            <div style={{ position: "fixed" as const, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(400px, 92vw)", background: "#FFFFFF", borderRadius: 20, zIndex: 201, boxShadow: "0 20px 60px rgba(0,0,0,0.3)", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", background: "#F0E8D5", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26 }}>🗓️</span>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#2A241C" }}>QR Code do Mapa Geral</div>
                  <div style={{ fontSize: 12, color: "#8A6A2E" }}>{MONTH_NAMES[month]} {year} — versão para colaboradores</div>
                </div>
              </div>
              <div style={{ padding: 24, textAlign: "center" as const }}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(mapaLink)}`}
                  alt="QR code do mapa geral"
                  style={{ width: 180, height: 180, margin: "0 auto 16px", border: "1px solid #E4DED3", borderRadius: 12, padding: 8 }}
                />
                <p style={{ fontSize: 13, color: "#6B6358", lineHeight: 1.6, margin: "0 0 14px", textAlign: "left" as const }}>
                  Este código mostra o horário completo da equipa (sem dados pessoais/de gestão) — ideal para afixar num placar. Qualquer colaborador pode ver ou imprimir a partir daí.
                </p>
                <input
                  readOnly
                  value={mapaLink}
                  onFocus={(e) => e.target.select()}
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 12px", fontSize: 12, fontFamily: "monospace", outline: "none", background: "#F7F9FB", color: "#2A241C", boxSizing: "border-box" as const, marginBottom: 14, colorScheme: "light" as const }}
                />
                <button
                  onClick={() => setShowMapaGeralModal(false)}
                  style={{ width: "100%", background: "#2A241C", color: "#F5B944", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </>
        );
      })()}

      </>
      </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "#F5EDD8",
    minHeight: "100vh",
    padding: "32px 24px 60px",
    color: "#2A241C",
    animation: "pageOpen 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: 16,
    maxWidth: 1300,
    margin: "0 auto 20px",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    fontWeight: 700,
    color: "#2A241C",
    letterSpacing: "-0.01em",
  },
  logoSub: {
    fontSize: 12,
    color: "#A39B8E",
    marginTop: 1,
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap" as const,
  },
  monthNav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 10,
    padding: "4px 6px",
  },
  navBtnCompact: {
    border: "none",
    background: "transparent",
    borderRadius: 6,
    padding: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#6B6358",
  },
  monthLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    minWidth: 120,
    textAlign: "center" as const,
    color: "#2A241C",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 10,
    padding: "4px 6px",
  },
  toolBtn: {
    border: "none",
    background: "transparent",
    borderRadius: 6,
    padding: 7,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6B6358",
    transition: "background 0.1s",
  },
  toolDivider: {
    width: 1,
    height: 18,
    background: "#E4DED3",
    margin: "0 4px",
    flexShrink: 0,
  },
  printMenuOverlay: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 10,
  },
  printMenu: {
    position: "absolute" as const,
    top: "calc(100% + 6px)",
    right: 0,
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(42,36,28,0.12)",
    minWidth: 240,
    zIndex: 20,
    overflow: "hidden" as const,
    padding: "6px 0",
  },
  printMenuItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    border: "none",
    background: "transparent",
    padding: "10px 14px",
    cursor: "pointer",
    textAlign: "left" as const,
    fontFamily: "'Inter', sans-serif",
    color: "#2A241C",
    transition: "background 0.1s",
  },
  printMenuItemTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: "#2A241C",
  },
  printMenuItemSub: {
    fontSize: 11,
    color: "#A39B8E",
    marginTop: 1,
  },
  printMenuDivider: {
    height: 1,
    background: "#EFEAE2",
    margin: "4px 0",
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 6,
    maxWidth: 1300,
    margin: "0 auto 12px",
  },
  summaryCard: {
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 8,
    padding: "6px 10px",
  },
  summaryCardWarn: {
    background: "#FFF5F4",
    border: "1px solid #F2C4BC",
  },
  summaryLabel: {
    fontSize: 8,
    fontWeight: 600,
    color: "#A39B8E",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    marginBottom: 1,
  },
  summaryValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    color: "#2A241C",
    lineHeight: 1.1,
  },
  summarySub: {
    fontSize: 9,
    color: "#A39B8E",
    marginTop: 1,
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "#A39B8E",
    maxWidth: 1300,
    margin: "0 auto 8px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  },
  selectBar: {
    maxWidth: 1300,
    margin: "0 auto 16px",
    background: "#2A241C",
    borderRadius: 12,
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: 10,
  },
  selectBarText: {
    color: "#C2BAAC",
    fontSize: 14,
    fontWeight: 500,
  },
  selectBtnPrimary: {
    background: "#B5483D",
    color: "#FFFFFF",
    border: "none",
    borderRadius: 8,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  selectBtnSecondary: {
    background: "rgba(255,255,255,0.12)",
    color: "#FBF9F5",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 8,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  selectBtnCancel: {
    background: "transparent",
    color: "#A39B8E",
    border: "none",
    borderRadius: 8,
    padding: "8px 12px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  alertBox: {
    maxWidth: 1300,
    margin: "0 auto 20px",
    background: "#FFF5F4",
    border: "1px solid #F2C4BC",
    borderRadius: 12,
    padding: "14px 16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  alertIcon: {
    fontSize: 14,
    flexShrink: 0,
    marginTop: 2,
  },
  alertTitle: {
    display: "block",
    fontSize: 14,
    fontWeight: 700,
    color: "#9B3A2F",
    marginBottom: 8,
    fontFamily: "'Space Grotesk', sans-serif",
  },
  alertList: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 6,
  },
  alertChip: {
    display: "inline-block",
    background: "#FDDDD9",
    color: "#7A2E24",
    borderRadius: 6,
    padding: "3px 8px",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Space Grotesk', sans-serif",
  },
  legend: {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
    alignItems: "center",
    maxWidth: 1300,
    margin: "0 auto 16px",
    fontSize: 13,
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 3,
    display: "inline-block",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  legendText: {
    color: "#6B6358",
    fontWeight: 500,
  },
  legendHint: {
    color: "#A39B8E",
    fontSize: 12,
    marginLeft: "auto",
  },
  gridWrap: {
    maxWidth: 1300,
    margin: "0 auto 24px",
    overflowX: "auto",
    border: "1px solid #E4DED3",
    borderRadius: 14,
    background: "#FFFFFF",
  },
  row: {
    display: "flex",
    height: 40,
    borderBottom: "1px solid #EFEAE2",
  },
  headerCell: {
    fontWeight: 600,
    fontSize: 12,
    color: "#A39B8E",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    display: "flex",
    alignItems: "center",
  },
  nameCell: {
    width: 150,
    minWidth: 150,
    height: "100%",
    boxSizing: "border-box" as const,
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRight: "1px solid #EFEAE2",
    fontSize: 13,
    fontWeight: 500,
  },
  nameText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  nameActions: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexShrink: 0,
  },
  iconBtn: {
    border: "none",
    background: "transparent",
    color: "#C2BAAC",
    cursor: "pointer",
    padding: 4,
    borderRadius: 6,
    display: "flex",
    flexShrink: 0,
  },
  dayHeaderCell: {
    width: 40,
    minWidth: 40,
    height: "100%",
    boxSizing: "border-box" as const,
    padding: "6px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    borderRight: "1px solid #EFEAE2",
  },
  dayNum: {
    fontWeight: 600,
    fontSize: 12,
    color: "#2A241C",
    lineHeight: 1,
  },
  dayLetter: {
    fontSize: 9,
    color: "#A39B8E",
    lineHeight: 1,
    marginTop: 4,
  },
  dayCell: {
    width: 40,
    minWidth: 40,
    height: 40,
    border: "none",
    borderRight: "1px solid #EFEAE2",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
  },
  exCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    padding: 0,
    cursor: "default",
  },
  exLabel: {
    flex: "0 0 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "transparent",
    fontSize: 9,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    lineHeight: 1,
  },
  exInput: {
    flex: "0 0 20px",
    width: "100%",
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(255,255,255,0.18)",
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    outline: "none",
    padding: 0,
    colorScheme: "light",
  },
  statCell: {
    width: 42,
    minWidth: 42,
    height: "100%",
    boxSizing: "border-box" as const,
    padding: "6px 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #EFEAE2",
  },
  statHeaderLabel: {
    fontSize: 8,
    lineHeight: 1.15,
    textAlign: "center" as const,
    whiteSpace: "normal" as const,
    wordBreak: "break-word" as const,
    padding: "6px 2px",
  },
  statValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 10,
  },
  statValueMuted: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: 9,
    color: "#C2BAAC",
  },
  totalValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 10,
    color: "#B08A4E",
  },
  absenceBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 16,
    height: 16,
    borderRadius: 5,
    background: "#C2554A",
    color: "#FFFFFF",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 9,
  },
  coverageCell: {
    width: 40,
    minWidth: 40,
    height: 40,
    borderRight: "1px solid #EFEAE2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    background: "#FBF9F5",
  },
  coverageSep: {
    color: "#D9D4CC",
    margin: "0 1px",
  },
  footer: {
    maxWidth: 1300,
    margin: "0 auto 28px",
  },
  addBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#2A241C",
    color: "#FBF9F5",
    border: "none",
    borderRadius: 10,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  addBtnSmall: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "transparent",
    color: "#6B6358",
    border: "1px dashed #D9D4CC",
    borderRadius: 10,
    padding: "8px 14px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  addBtnPrimary: {
    background: "#2A241C",
    color: "#FBF9F5",
    border: "none",
    borderRadius: 10,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  addForm: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    minWidth: 200,
    border: "1px solid #E4DED3",
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    background: "#FFFFFF",
    color: "#2A241C",
    colorScheme: "light",
  },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #E4DED3",
    borderRadius: 10,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    color: "#6B6358",
    fontFamily: "'Inter', sans-serif",
  },
  deleteBtn: {
    background: "#B5483D",
    color: "#FFFFFF",
    border: "none",
    borderRadius: 10,
    padding: "10px 18px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(42,36,28,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 60,
    padding: 16,
  },
  modal: {
    background: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    maxWidth: 360,
    width: "100%",
    position: "relative",
    boxShadow: "0 12px 40px rgba(42,36,28,0.18)",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    right: 14,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#A39B8E",
    padding: 4,
  },
  modalTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    fontWeight: 700,
    margin: "0 0 8px",
  },
  modalText: {
    fontSize: 14,
    color: "#6B6358",
    lineHeight: 1.5,
    margin: "0 0 20px",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
  },
};
