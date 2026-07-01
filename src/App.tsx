
import React, { useState, useEffect, useMemo } from "react";

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
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: { ...sbHeaders, "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify({ id: "main", ...data, updated_at: new Date().toISOString() }),
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

  const filteredProducts = filterCategory === "Todos"
    ? products
    : products.filter((p) => p.category === filterCategory);

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

      {/* Tabs */}
      <div style={stockStyles.tabs}>
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

      {/* Inventário */}
      {activeTab === "inventory" && (
        <div>
          {/* Filtro por categoria + botão adicionar */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" as const, alignItems: "center" }}>
            {["Todos", ...allCategories].map((cat) => {
              const catColor = cat !== "Todos" ? getCategoryColor(cat) : undefined;
              const isActive = filterCategory === cat;
              return (
              <div key={cat} style={{ position: "relative" as const, display: "inline-flex", alignItems: "center" }}>
                <button
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
            <div style={stockStyles.empty}>Nenhum produto {filterCategory !== "Todos" ? `na categoria "${filterCategory}"` : "em inventário"}.<br />Clique em "Adicionar produto" para começar.</div>
          ) : (
            <div className="stock-grid" style={stockStyles.productGrid}>
              {filteredProducts.map((prod) => {
                const isLow = prod.quantity > 0 && prod.quantity <= prod.minQuantity;
                const isEmpty = prod.quantity <= 0;
                const catColor = STOCK_CATEGORY_COLORS[prod.category] || "#A39B8E";
                return (
                  <div key={prod.id} style={{ ...stockStyles.productCard, ...(isEmpty ? stockStyles.productCardEmpty : isLow ? stockStyles.productCardLow : {}) }}>
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
                        <span style={{ ...stockStyles.categoryBadge, background: catColor + "22", color: catColor }}>{prod.category}</span>
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
  filterBtn: { border: "1px solid #E4DED3", background: "#FFFFFF", borderRadius: 8, padding: "6px 12px", fontSize: 13, cursor: "pointer", fontFamily: "'Inter', sans-serif", color: "#6B6358", fontWeight: 500 },
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
  dailyLogs?: { date: string; text: string; author?: string }[];
  files?: { name: string; type: string; data: string; uploadedAt: string }[];
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
}

function UtentesPage({ onBack }: { onBack: () => void }) {
  const [utentes, setUtentes] = useState<Utente[]>(() => loadUtentesData()?.utentes ?? []);
  const [openUtente, setOpenUtente] = useState<Utente | null>(null);
  const [importingMedical, setImportingMedical] = useState(false);
  const [medicalImportResult, setMedicalImportResult] = useState<string | null>(null);
  const [importResult, setImportResult] = useState<string | null>(null);

  const handleImportMedicalReport = (useCamera: boolean) => {
    const currentUtente = openUtente;
    if (!currentUtente) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,.pdf";
    if (useCamera) input.setAttribute("capture", "environment");
    input.onchange = async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      setImportingMedical(true);
      setMedicalImportResult(null);
      try {
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve((ev.target?.result as string).split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        const now = new Date();
        const dateStr = now.toLocaleDateString("pt-PT").replace(/\//g, "-");
        const timeStr = now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" }).replace(":", "h");
        const docName = `relatorio_${dateStr}_${timeStr}.${file.name.split(".").pop() || "jpg"}`;
        const fileData = `data:${file.type};base64,${base64}`;
        const newFile = { name: docName, type: file.type, data: fileData, uploadedAt: now.toISOString() };
        updateUtente(currentUtente.id, { files: [...(currentUtente.files || []), newFile] });
        setMedicalImportResult("📸 Documento guardado! Envie-o no chat do Claude para eu extrair a informação médica.");
      } catch {
        setMedicalImportResult("❌ Erro ao guardar o documento.");
      }
      setImportingMedical(false);
    };
    document.body.appendChild(input); input.click(); document.body.removeChild(input);
  };
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

    // Loading
    const loadingAlert = document.createElement("div");
    loadingAlert.id = "pic-loading";
    loadingAlert.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#2A241C;color:#F5B944;padding:20px 32px;border-radius:16px;font-family:\'Inter\',sans-serif;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,0.4);text-align:center";
    loadingAlert.innerHTML = "✨ A gerar PIC com IA...<br><span style=\'font-size:11px;color:#C9C2B5;font-weight:400\'>A preparar o documento</span>";
    document.body.appendChild(loadingAlert);

    // Chamar Claude para gerar resumos
    let aiTexts: Record<string, string> = {};
    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{ role: "user", content: `És um assistente de saúde para um lar de idosos português (ERPI). Com base nos dados do utente, gera textos profissionais em português europeu para o Plano Individual de Cuidados.\n\nDADOS:\n${JSON.stringify({ nome: u.name, dataNasc: u.birthDate, quarto: u.room, dataAdmissao: u.entryDate, medicacao: meds, higiene: u.hygieneNotes, alimentacao: u.feedingNotes, outros: u.otherNotes, registoRecente: u.dailyLogs?.[0]?.text })}\n\nResponde APENAS em JSON válido sem markdown:\n{"motivo":"2-3 frases sobre motivo de admissão","habitos":"2-3 frases sobre hábitos de vida","obj_higiene":"objetivo higiene","act_higiene":"atividade higiene","obj_saude":"objetivo saúde","act_saude":"atividade saúde","obj_alimentacao":"objetivo alimentação","act_alimentacao":"atividade alimentação"}` }]
        })
      });
      if (response.ok) {
        const data = await response.json();
        const text = data.content?.map((c: any) => c.text || "").join("") || "";
        try { aiTexts = JSON.parse(text.replace(/\`\`\`json|\`\`\`/g, "").trim()); } catch {}
      }
    } catch (e) { console.warn("IA não disponível:", e); }

    document.getElementById("pic-loading")?.remove();

    // Carregar dados guardados anteriormente do PIC
    const picData = u.picData || {};

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

    <div class="no-print-never" style="position:fixed;bottom:12mm;right:15mm;display:flex;align-items:center;gap:6px;opacity:0.22;pointer-events:none;z-index:0">
      <img src="data:image/jpeg;base64,/9j/4Q/+RXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAABACgAwAEAAAAAQAABACkBgADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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g0Yo255pgKAKWijikAh6cUuKPaigA9qTIPSl5xSY9aADrxSDGeKXHNJt55pgLxijpRjvS+1IAooo4oAKO1FLQA0mk7UpGaTGKAEwMcUHpQAadt44oATaMilA70AY4paAEpaDxQKAAUmRS0UAN9vSkp2PSk29qYB1GKXgDijHFGABQAY9qB60DFLSAKOMUZ9KKACjtSYzRjjFACcUcCjb2FLt5pgAwKBilwMUdKQBxRR0ooAKOlHtRz2oATtScd6dim7aYBjml470beMUAcUgDndij6UcUpoAOnNJR7ij3oAKT3FLSgUANwMYowO3FG3vSbKAECqaeKbyvHalIFAC0denFGB3peAPagA6CjtTMnpTecYagB4ORS8flTQCOmMUuO/agBBjHFLjFHagDODTAX6UUgxninAUgCiij2oAPpSdKXFJigA+WmjFLigL3pgLikx60bcUuOKAF4opOBS0gDiigUlACjpScUYoxQAnejoOtLt9aQLimAcd6UAY4pNgpQMUgFxjpQKTjFLQAUe1FNxQgF4o9qUik2jPSgA460tJig8UALij6UD2ooAKTp0paOnFABSdqWigD//X/v2pelJ0zS0AFNI6U6igApaSjNABSYpRR9KAE2jrRtoPpS0AJjHApTRRQADFLTe1L2oAWm8daXiigBu0UBfWlGenpR0pgIF70oUClxRSAQ4pelFJ0oAWjvRkZooAKTApfpSH1oAMYowKXFHNADdoFL05paOnNACdOlLRiigApDntS9KTtmgAI703b607mgimA3H5UoUU4Cii4CYpeO1FJkZ4pALR7UUdKAD60mOaWmcA0AO20AetN3DoKTIIoAdsFGMcUo7UcdKAAYpcim5HrS8dKAHUlLTeBzigAx6UmOaCfSgHJoATZS7QKAP0pevIp3ATaMUozS+1HSkAtJRS0AJSe1L0pKADHajFJg9PSl70wE2il2ilopAAx2paSj2oAWkoooAMU3B6Up6YoHtQA3AoAx7U7Bo4oAYoBFPwB8tLxTSBQA6kFHTmjtQAdBSdeKdTdozxQAYFGAOKOQKAMcUALtFN2inUgNAC9OlHQUcUhYdqAHcUtNHpS0ANI7jtSbR3p5poHrQABFUcUbaO2ad2oAZhVwKEAHSn0EZGKAEJxSik4oAx2oAdSUtJx+VACD0pNoBzS8d6Mc0wEC/hRtGaUA96XAFA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gBBgUe46UtIenSgAoo96WgApaTvigCgApaSloAKSij8KAG+9Lml46ijp0oAKWkpaACkzS0UANxzmnUUlABRR7UlAC9qTmloxQAUtFFABRSUtABSUtFACU3pzThSUAA6UuKMUUAFLRSUAGOMUUYpaAE9qTIxTqTgUAJSfhTvaigAooooAMUnagD1o6UAOpOn0o6dKKACk9qWk57igCPlTSEEjdT2FNIB6UACg04jHNO7UYGOaAG5FP60gA7UmQDQAvyijPpSbgaXnsKAEpQaWkBoAWik6celHbBoAUDFIKQDFGFoAd9KPajiigApvNLmj6CgBB1oHWnUnTigBRS0mRSGgBfak6UEZ6UtAAOlFHBFH4UAJS80nPpS0AJzTqSjp1oAOlLTaKAFo9qKWgBKKKKACkpfpRigD/9X+/ekApDntSgccUALiiijpQAZ7UU3jtS544oAUccUtIKKADvRSc0EGgBPanYpBmjvQAe1LxikoyAKAF70UCloASiijn0oATFGOMUmDRg0AL0FGPwo70dOlAC47UlJwB6U72oAKPeik+lAC9BTCKdzSYagAx2FL24o59KXnFABSdvWl6CjAoATNHHQUcUwMenpQArdKZ7UvNJzxQAvNL2xSYNGGoAMU4LQFpccc8UAKMClpgwetPGBxQAnelxRS0AJ0oIyMUc0UALRRRQAUUUmRQAUUgx2paACloooAKKKKACiiigApKWkoAOKKQY7U6gAooooAKKSjmgBaKKTIFAC0maO9HBoAQD0p1FFABRRSUALRRRQAUUnApCQKAFo6jmlooAQUtFJ9KACiiigApBS4ooAKSjIpaACiij6UAHXrSEenFHI6UvOKAG47Cl7UnOKUDjFABj1opegpMgUAL0HFN6HApe1GKAFo4pvI4oweaAHcUnNJ83pRg+mKAFx60DOKTB6U6gBMYpRSZHekyMUWAUYAxS0YoOe1AB9aOlFJz2oATGKXHNHNGO9ACDpThS0zIFADqKOOlH0oAKKWigBKTHNLzimgEUAKBRijntS0AJS0maXIoAKKTr0paAFpKKKAP//W/v1706m98UA9qAHUntS0YFABS0nTpRQAUUe1FACYx0pfrR0HNHQUAFAoxRigBMc0opv0pcUAKKKOO1LQAlJnmlzR2zQAlH0paTnpQAtNPpS49aMdqAClpoB/KndeKACik4zS0AFF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" style="width:28px;height:28px;object-fit:contain">
      <span style="font-size:12pt;font-weight:900;color:#1a7a3a;font-family:Arial,sans-serif;letter-spacing:1px">4Trevo</span>
    </div>
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
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        saveToSupabase("ementa_data", {
          ementa: { data: dataUrl, type: file.type, uploadedAt: new Date().toISOString() },
        }).then(() => {
          alert("✅ Ementa da semana atualizada! Já está visível para todas as famílias.");
        }).catch(() => {
          alert("❌ Erro ao guardar a ementa. Tente novamente.");
        }).finally(() => setUploadingEmenta(false));
      };
      reader.readAsDataURL(file);
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

  const UTENTE_FIELDS: { key: string; label: string; placeholder: string; type?: string; multiline?: boolean }[] = [
    { key: "room", label: "Quarto", placeholder: "Ex: 12A" },
  ];

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
        <>
          <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.3)", zIndex: 50 }} onClick={() => setOpenUtente(null)} />
          <div className="side-panel-mobile" style={{ position: "fixed" as const, top: 0, right: 0, bottom: 0, width: 400, maxWidth: "100vw", background: "#FFFFFF", boxShadow: "-4px 0 24px rgba(42,36,28,0.12)", zIndex: 51, display: "flex", flexDirection: "column" as const, overflow: "hidden" as const }}>
            {/* Header do painel */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #EFEAE2", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#F0E8D5", color: "#B08A4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0, overflow: "hidden", cursor: "pointer", position: "relative" as const }}
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (ev: Event) => {
                    const file = (ev.target as HTMLInputElement).files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (r) => updateUtente(u.id, { photo: r.target?.result as string });
                    reader.readAsDataURL(file);
                  };
                  document.body.appendChild(input); input.click(); document.body.removeChild(input);
                }}
                title="Clique para alterar a foto"
              >
                {u.photo
                  ? <img src={u.photo} alt={u.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : getInitials(u.name)
                }
              </div>
              <div style={{ flex: 1 }}>
                <input
                  value={u.name}
                  onChange={(e) => updateUtente(u.id, { name: e.target.value })}
                  onKeyDown={(e) => { if (e.key === "Enter") setOpenUtente(null); }}
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, border: "none", borderBottom: "1px solid #E4DED3", background: "transparent", outline: "none", width: "100%", color: "#2A241C", padding: "2px 0" }}
                />
                <button
                  onClick={() => setShowCCPanel(u.id)}
                  style={{ fontSize: 12, color: "#3A5A70", marginTop: 2, border: "none", background: "transparent", padding: 0, cursor: "pointer", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}
                >
                  📇 Ficha do utente (dados do CC)
                </button>
              </div>
              <button style={{ border: "none", background: "transparent", cursor: "pointer", color: "#A39B8E", padding: 4 }} onClick={() => setOpenUtente(null)}>
                <IconX size={20} />
              </button>
            </div>

            {/* Campos */}
            <div style={{ flex: 1, overflowY: "auto" as const, padding: "20px 24px" }}>
              {UTENTE_FIELDS.map(({ key, label, placeholder, multiline }) => {
                const value = (openUtente as any)[key] || "";
                const isDate = key === "birthDate" || key === "entryDate";

                const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
                  // Remove tudo que não seja número
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
                  // Formata automaticamente: DD/MM/AAAA
                  let formatted = digits;
                  if (digits.length > 2) formatted = digits.slice(0, 2) + "/" + digits.slice(2);
                  if (digits.length > 4) formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4);
                  updateUtente(u.id, { [key]: formatted });
                };

                return (
                  <div key={key} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                    {multiline ? (
                      <textarea rows={3} value={value} placeholder={placeholder}
                        onChange={(e) => updateUtente(u.id, { [key]: e.target.value })}
                        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); setOpenUtente(null); } }}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }} />
                    ) : isDate ? (
                      <input
                        type="text"
                        value={value}
                        placeholder="DD/MM/AAAA"
                        inputMode="numeric"
                        maxLength={10}
                        onChange={handleDateInput}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpenUtente(null); }}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const, letterSpacing: "0.05em" }}
                      />
                    ) : (
                      <input type="text" value={value} placeholder={placeholder}
                        onChange={(e) => updateUtente(u.id, { [key]: e.target.value })}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpenUtente(null); }}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const }} />
                    )}
                  </div>
                );
              })}

              {/* Registo do dia — diário clínico */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  📝 Registo do dia
                </label>

                {/* Campo para adicionar novo registo (hoje) */}
                <div style={{ marginBottom: 14 }}>
                  <textarea
                    rows={3}
                    value={newLogText}
                    onChange={(e) => setNewLogText(e.target.value)}
                    placeholder={`Escrever registo de hoje (${todayStr})...`}
                    style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const, marginBottom: 8 }}
                  />
                  <button
                    onClick={() => addDailyLog(u.id)}
                    disabled={!newLogText.trim()}
                    style={{ background: newLogText.trim() ? "#2A241C" : "#E4DED3", color: newLogText.trim() ? "#F5B944" : "#A39B8E", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: newLogText.trim() ? "pointer" : "default", fontFamily: "'Inter', sans-serif" }}
                  >
                    + Adicionar registo de hoje
                  </button>
                </div>

                {/* Histórico de registos anteriores */}
                {(u.dailyLogs?.length ?? 0) > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, maxHeight: 280, overflowY: "auto" as const }}>
                    {u.dailyLogs!.map((log, idx) => {
                      const editable = isLogEditable(u.id, idx, log.date);
                      const isEditing = editingLogIdx === idx;
                      return (
                        <div key={idx} style={{ background: "#F7F5F0", borderRadius: 10, padding: "10px 12px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#5B8DBE" }}>
                              {log.date}{log.date === todayStr ? " (hoje)" : ""}
                              {!editable && <span style={{ marginLeft: 5 }} title="Bloqueado — requer autorização">🔒</span>}
                            </span>
                            <div style={{ display: "flex", gap: 6 }}>
                              {isEditing ? (
                                <>
                                  <button onClick={() => saveEditedLog(u.id, idx)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#3B6D11", fontSize: 13, fontWeight: 700 }} title="Guardar">✓</button>
                                  <button onClick={() => { setEditingLogIdx(null); setEditingLogText(""); }} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 12 }} title="Cancelar">✕</button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => {
                                      if (editable) {
                                        setEditingLogIdx(idx);
                                        setEditingLogText(log.text);
                                      } else {
                                        if (requestUnlock(u.id, idx)) {
                                          setEditingLogIdx(idx);
                                          setEditingLogText(log.text);
                                        }
                                      }
                                    }}
                                    style={{ border: "none", background: "transparent", cursor: "pointer", color: "#8A6A2E", fontSize: 13 }}
                                    title={editable ? "Editar registo" : "Editar (requer autorização)"}
                                  >✏️</button>
                                  <button
                                    onClick={() => printDailyLog(u, log)}
                                    style={{ border: "none", background: "transparent", cursor: "pointer", color: "#8A6A2E", fontSize: 13 }}
                                    title="Imprimir este registo"
                                  >🖨️</button>
                                  <button
                                    onClick={() => {
                                      if (!editable) { if (!requestUnlock(u.id, idx)) return; }
                                      if (!window.confirm("Remover este registo?")) return;
                                      setUtentes((prev) => prev.map((uu) => {
                                        if (uu.id !== u.id) return uu;
                                        const updated = { ...uu, dailyLogs: (uu.dailyLogs || []).filter((_, i) => i !== idx) };
                                        if (openUtente?.id === u.id) setOpenUtente(updated);
                                        return updated;
                                      }));
                                    }}
                                    style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 12 }}
                                  >🗑️</button>
                                </>
                              )}
                            </div>
                          </div>
                          {isEditing ? (
                            <textarea
                              rows={3}
                              value={editingLogText}
                              onChange={(e) => setEditingLogText(e.target.value)}
                              autoFocus
                              style={{ width: "100%", border: "1px solid #B8CCE0", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                            />
                          ) : (
                            <div style={{ fontSize: 13, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.5 }}>{log.text}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ fontSize: 12, color: "#A39B8E", textAlign: "center" as const, padding: "10px 0" }}>Nenhum registo ainda.</div>
                )}
              </div>

              {/* Medicação Diária */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  💊 Medicação Diária
                </label>
                {(u.medications?.length ?? 0) > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: 10 }}>
                    {u.medications!.map((med) => (
                      <div key={med.id} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F7F5F0", borderRadius: 8, padding: "8px 10px" }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#2A241C" }}>{med.name}</span>
                          {med.dose && <span style={{ fontSize: 12, color: "#6B6358" }}> · {med.dose}</span>}
                          {med.schedule && <span style={{ fontSize: 12, color: "#8A6A2E" }}> · {med.schedule}</span>}
                        </div>
                        <button onClick={() => removeMedication(u.id, med.id)} style={{ border: "none", background: "transparent", cursor: "pointer", color: "#C2BAAC", fontSize: 12 }}>✕</button>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                  <input value={newMedName} onChange={(e) => setNewMedName(e.target.value)} placeholder="Medicamento" style={{ flex: 2, border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 9px", fontSize: 12, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                  <input value={newMedDose} onChange={(e) => setNewMedDose(e.target.value)} placeholder="Dose" style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 9px", fontSize: 12, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <input value={newMedSchedule} onChange={(e) => setNewMedSchedule(e.target.value)} placeholder="Horário (ex: 8h, 13h, 20h)" style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 8, padding: "7px 9px", fontSize: 12, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C" }} />
                  <button onClick={() => addMedication(u.id)} disabled={!newMedName.trim()} style={{ background: newMedName.trim() ? "#2A241C" : "#E4DED3", color: newMedName.trim() ? "#F5B944" : "#A39B8E", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: newMedName.trim() ? "pointer" : "default", fontFamily: "'Inter', sans-serif" }}>+ Add</button>
                </div>
                <textarea
                  rows={2}
                  value={u.medicationNotes || ""}
                  onChange={(e) => updateUtente(u.id, { medicationNotes: e.target.value })}
                  placeholder="Notas adicionais sobre medicação..."
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const, marginTop: 8 }}
                />
              </div>

              {/* Cuidados de Higiene */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  🧼 Cuidados de Higiene
                </label>
                <textarea
                  rows={3}
                  value={u.hygieneNotes || ""}
                  onChange={(e) => updateUtente(u.id, { hygieneNotes: e.target.value })}
                  placeholder="Rotina de higiene, banho assistido, cuidados especiais..."
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                />
              </div>

              {/* Alimentação */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  🍽️ Alimentação
                </label>
                <textarea
                  rows={3}
                  value={u.feedingNotes || ""}
                  onChange={(e) => updateUtente(u.id, { feedingNotes: e.target.value })}
                  placeholder="Restrições alimentares, alergias, dieta especial, apetite..."
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                />
              </div>

              {/* Outros */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                  📌 Outros
                </label>
                <textarea
                  rows={3}
                  value={u.otherNotes || ""}
                  onChange={(e) => updateUtente(u.id, { otherNotes: e.target.value })}
                  placeholder="Outras informações relevantes..."
                  style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                />
              </div>

              {/* Documentos */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Documentos</label>
                  <div style={{ display: "flex", gap: 6 }}>
                    {/* Câmara — relatório médico */}
                    <button
                      style={{ display: "inline-flex", alignItems: "center", gap: 4, background: importingMedical ? "#A39B8E" : "#2A241C", color: "#F5B944", border: "none", borderRadius: 7, padding: "5px 8px", fontSize: 11, fontWeight: 600, cursor: importingMedical ? "default" : "pointer", fontFamily: "'Inter', sans-serif" }}
                      onClick={() => !importingMedical && handleImportMedicalReport(true)}
                      title="Fotografar relatório médico"
                    >
                      {importingMedical ? "⏳" : "📷"}
                    </button>
                    {/* Galeria */}
                    <button
                      style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 7, padding: "5px 8px", fontSize: 11, fontWeight: 600, cursor: importingMedical ? "default" : "pointer", fontFamily: "'Inter', sans-serif" }}
                      onClick={() => !importingMedical && handleImportMedicalReport(false)}
                      title="Importar de galeria ou PDF"
                    >
                      🖼️
                    </button>
                    {/* Adicionar ficheiro normal */}
                    <button
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#2A241C", fontFamily: "'Inter', sans-serif" }}
                      onClick={() => {
                      const input = document.createElement("input");
                      input.type = "file";
                      input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
                      input.multiple = true;
                      input.onchange = (e: Event) => {
                        Array.from((e.target as HTMLInputElement).files || []).forEach((file) => {
                          if (file.size > 5 * 1024 * 1024) { alert(`"${file.name}" é maior que 5MB.`); return; }
                          const reader = new FileReader();
                          reader.onload = (ev) => {
                            const fileData = ev.target?.result as string;
                            const newFile = { name: file.name, type: file.type, data: fileData, uploadedAt: new Date().toISOString() };
                            updateUtente(u.id, { files: [...(u.files || []), newFile] });
                          };
                          reader.readAsDataURL(file);
                        });
                      };
                      document.body.appendChild(input); input.click(); document.body.removeChild(input);
                    }}
                  >
                    <IconUpload size={13} /> Ficheiro
                  </button>
                  </div>
                </div>

                {/* Resultado da importação médica */}
                {medicalImportResult && (
                  <div style={{ background: medicalImportResult.startsWith("✅") ? "#E8F5E9" : "#FFF5F4", border: `1px solid ${medicalImportResult.startsWith("✅") ? "#A5D6A7" : "#F2C4BC"}`, borderRadius: 8, padding: "8px 12px", fontSize: 12, fontWeight: 500, color: medicalImportResult.startsWith("✅") ? "#2E7D32" : "#9B3A2F", marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
                    <span>{medicalImportResult}</span>
                    <button onClick={() => setMedicalImportResult(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 14, color: "#A39B8E" }}>✕</button>
                  </div>
                )}

                {(u.files || []).length === 0 ? (
                  <div style={{ background: "#F7F5F0", borderRadius: 8, padding: "12px", fontSize: 13, color: "#A39B8E", textAlign: "center" as const }}>
                    Nenhum documento ainda.<br /><span style={{ fontSize: 11 }}>PDF, imagens, Word (máx. 5MB)</span>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                    {(u.files || []).map((file, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F7F5F0", border: "1px solid #E4DED3", borderRadius: 8, padding: "10px 12px" }}>
                        <span style={{ fontSize: 18 }}>{file.type.startsWith("image/") ? "🖼️" : file.type === "application/pdf" ? "📄" : "📎"}</span>
                        <div style={{ flex: 1, overflow: "hidden" }}>
                          <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{file.name}</div>
                          <div style={{ fontSize: 11, color: "#A39B8E" }}>{new Date(file.uploadedAt).toLocaleDateString("pt-PT")}</div>
                        </div>
                        <button style={{ border: "none", background: "#FFFFFF", borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#5B8DBE" }}
                          onClick={() => { const a = document.createElement("a"); a.href = file.data; a.download = file.name; a.click(); }}>
                          <IconDownload size={14} />
                        </button>
                        <button style={{ border: "none", background: "#FFFFFF", borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#C2554A" }}
                          onClick={() => { if (!window.confirm(`Remover "${file.name}"?`)) return; updateUtente(u.id, { files: (u.files || []).filter((_, i) => i !== idx) }); }}>
                          <IconX size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 24px", borderTop: "1px solid #EFEAE2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <button
                onClick={() => handleGetFamilyLink(u)}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E8EEF5", color: "#3A5A70", border: "1px solid #B8CCE0", borderRadius: 8, padding: "8px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                title="Gerar/copiar link de acesso para a família"
              >
                🔗 Link Família
              </button>
              <button
                onClick={() => handleGeneratePIC(u)}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E8F0E8", color: "#3B6D11", border: "1px solid #A8C8A0", borderRadius: 8, padding: "8px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                title="Gerar Plano Individual de Cuidados em PDF"
              >
                📋 Gerar PIC
              </button>
              <button style={{ background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }} onClick={() => setOpenUtente(null)}>Fechar</button>
            </div>
          </div>
        </>
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
  const [ementa, setEmenta] = useState<{ data: string; type: string; uploadedAt: string } | null>(null);
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
      if (ementaRow?.ementa?.data) setEmenta(ementaRow.ementa);
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
          const logsByDate: Record<string, { date: string; text: string }> = {};
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
                      <div style={{ fontSize: 14, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.7, background: "#F7F5F0", borderRadius: 12, padding: 16 }}>
                        {selectedLog.text}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })()}

        {/* Documentos */}
        {(utente.files?.length ?? 0) > 0 && (
          <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 10 }}>Documentos</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {utente.files!.map((f, i) => (
                <a key={i} href={f.data} download={f.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3A5A70", textDecoration: "none", background: "#F7F5F0", borderRadius: 8, padding: "8px 12px" }}>
                  📎 {f.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Ementa semanal */}
        <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#A39B8E", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 10 }}>🍽️ Ementa da Semana</div>
          {ementa ? (
            ementa.type.startsWith("image/") ? (
              <img src={ementa.data} alt="Ementa da semana" style={{ width: "100%", borderRadius: 10, border: "1px solid #E4DED3" }} />
            ) : (
              <a href={ementa.data} download="ementa.pdf" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3A5A70", textDecoration: "none", background: "#F7F5F0", borderRadius: 8, padding: "10px 14px" }}>
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
                  const logsByDate: Record<string, { date: string; text: string }> = {};
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
                              <div style={{ fontSize: 14, color: "#2A241C", whiteSpace: "pre-wrap" as const, lineHeight: 1.7, background: "#F7F5F0", borderRadius: 12, padding: 18, marginBottom: 20 }}>
                                {selectedLog.text}
                              </div>
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
                        <a key={i} href={f.data} download={f.name} style={{ fontSize: 12, color: "#3A5A70", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
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

export default function App() {
  // Detectar acesso público de família via URL (?familia=CODIGO)
  const familyCode = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("familia")
    : null;

  const today = new Date();
  const [activePage, setActivePage] = useState<"home" | "schedule" | "stock" | "utentes">("home");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "synced" | "error">("idle");
  const [syncDone, setSyncDone] = useState(false);
  const [quickSearch, setQuickSearch] = useState("");
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [quickSearchTarget, setQuickSearchTarget] = useState<{ type: "utente" | "colaborador"; name: string; photo?: string } | null>(null);

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
    files?: { name: string; type: string; data: string; uploadedAt: string }[];
  }>>(() => {
    const stored = loadStoredData();
    return stored?.employeeProfiles ?? {};
  });
  const [openProfile, setOpenProfile] = useState<string | null>(null);
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
  const [confirmDelete, setConfirmDelete] = useState<{ name: string; group: "rv" | "main" } | null>(null);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedDays, setSelectedDays] = useState<Set<number>>(new Set());
  const [confirmClear, setConfirmClear] = useState(false);
  const [showPrintMenu, setShowPrintMenu] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

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
    ]).then(([escala, stock, utentesRow]) => {
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
  }, [employees, rvEmployees, schedule, extraHours, employeeEmails, scheduleLink, lastPublished, initialSyncComplete]);

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

  const cycleShift = (employee: string, day: number) => {
    const current = getShift(employee, day);
    const idx = current ? SHIFT_ORDER.indexOf(current) : -1;
    const nextIdx = idx + 1;
    if (nextIdx >= SHIFT_ORDER.length) {
      setShift(employee, day, null);
    } else {
      setShift(employee, day, SHIFT_ORDER[nextIdx]);
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
    setConfirmDelete(null);
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
    const emptyBg = isSelected ? "#FDDDD9" : isToday ? "#F0EDE6" : "#F7F5F0";
    const bg = isSelected ? "#FDDDD9" : def ? def.color : emptyBg;
    const fg = isSelected
      ? "#7A2E24"
      : def && shift && !LIGHT_SHIFTS.includes(shift)
      ? "#FFFFFF"
      : "#9A9388";
    const outline = isSelected
      ? "2px solid #B5483D"
      : isToday
      ? "2px solid #2A241C"
      : undefined;

    if (shift === "EX") {
      return (
        <div key={d} style={{
          ...styles.dayCell,
          ...styles.exCell,
          background: isSelected ? "#FDDDD9" : def!.color,
          outline,
          outlineOffset: outline ? "-2px" : undefined,
        }}>
          <button
            className="cell-btn"
            onClick={() => selectMode ? toggleDay(d) : cycleShift(emp, d)}
            style={{ ...styles.exLabel, color: isSelected ? "#7A2E24" : fg }}
            title={selectMode ? (isSelected ? "Desselecionar" : "Selecionar") : "Extra — clique para alterar turno"}
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
      );
    }

    return (
      <button
        key={d}
        className="cell-btn"
        onClick={() => selectMode ? toggleDay(d) : cycleShift(emp, d)}
        style={{
          ...styles.dayCell,
          background: bg,
          color: fg,
          outline,
          outlineOffset: outline ? "-2px" : undefined,
          borderRight: isToday && !isSelected ? "1px solid #2A241C" : "1px solid #EFEAE2",
        }}
        title={selectMode ? (isSelected ? "Desselecionar" : "Selecionar") : def ? def.label : "Sem turno — clique para atribuir"}
      >
        {isSelected ? "✕" : shift || "—"}
      </button>
    );
  };

  const renderStatHeaderCells = () => (
    <>
      <div style={{ ...styles.statCell, ...styles.headerCell }}>Dias</div>
      <div style={{ ...styles.statCell, ...styles.headerCell }}>Horas</div>
      <div style={{ ...styles.statCell, ...styles.headerCell }}>Faltas</div>
      <div style={{ ...styles.statCell, ...styles.headerCell }}>H. Extra</div>
      <div style={{ ...styles.statCell, ...styles.headerCell }}>Total</div>
    </>
  );

  const renderStatCells = (emp: string) => {
    const t = employeeTotals[emp] || { hours: 0, daysWorked: 0, absences: 0, extra: 0, total: 0 };
    return (
      <>
        <div style={styles.statCell}>
          <span style={styles.statValue}>{t.daysWorked ?? 0}</span>
        </div>
        <div style={styles.statCell}>
          <span style={styles.statValue}>{t.hours ?? 0}h</span>
        </div>
        <div style={styles.statCell}>
          {t.absences > 0 ? (
            <span style={styles.absenceBadge}>{t.absences}</span>
          ) : (
            <span style={styles.statValueMuted}>0</span>
          )}
        </div>
        <div style={styles.statCell}>
          {t.extra > 0 ? (
            <span style={{ ...styles.statValue, color: SHIFT_TYPES.EX.color }}>{t.extra}h</span>
          ) : (
            <span style={styles.statValueMuted}>0h</span>
          )}
        </div>
        <div style={styles.statCell}>
          <span style={styles.totalValue}>{t.total ?? 0}h</span>
        </div>
      </>
    );
  };

  const renderEmployeeRow = (emp: string, group: "rv" | "main") => {
    const av = getAvatar(emp);
    return (
      <div key={emp} style={styles.row}>
        <div style={{ ...styles.nameCell, position: "sticky", left: 0, zIndex: 2, background: "#FFFFFF" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: av.bg,
              color: av.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              flexShrink: 0,
            }}>
              {av.initials}
            </div>
            <button
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#2A241C", textAlign: "left" as const, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}
              onClick={() => setOpenProfile(emp)}
              title="Ver ficha do colaborador"
            >
              {emp}
            </button>
          </div>
          <div style={styles.nameActions}>
            <button
              className="icon-btn no-print"
              style={{ ...styles.iconBtn, color: employeeEmails[emp] ? "#B08A4E" : "#C2BAAC" }}
              onClick={() => handleEditEmail(emp)}
              aria-label={`Email de ${emp}`}
              title={employeeEmails[emp] ? `Email: ${employeeEmails[emp]}` : "Definir email"}
            >
              <IconMail size={14} />
            </button>
            <button
              className="icon-btn no-print"
              style={styles.iconBtn}
              onClick={() => setConfirmDelete({ name: emp, group })}
              aria-label={`Remover ${emp}`}
              title="Remover colaborador"
            >
              <IconTrash2 size={14} />
            </button>
          </div>
        </div>
        {days.map((d) => renderDayCell(emp, d))}
        {renderStatCells(emp)}
      </div>
    );
  };

  const gridMinWidth = 190 + numDays * 44 + 260;
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
        ? "#2A241C"
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

  return (
    <div style={{ ...styles.page, background: isHomePage ? "#1E3A1E" : "#1E3A1E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: #1E3A1E; }
        .cell-btn { transition: transform 0.08s ease; }
        .cell-btn:hover { transform: scale(1.05); }
        .cell-btn:active { transform: scale(0.97); }
        .scroll-x::-webkit-scrollbar { height: 6px; }
        .scroll-x::-webkit-scrollbar-thumb { background: #D9D4CC; border-radius: 3px; }
        .icon-btn:hover { background: #EFEAE2; }
        .add-btn:hover { background: #1F1B16; }
        .nav-btn:hover { background: #EFEAE2; border-radius: 6px; }
        .tool-btn:hover { background: #EFEAE2 !important; }
        .tool-btn-active { background: #F5B944 !important; color: #2A241C !important; }
        .tool-btn-active:hover { background: #F0AF30 !important; }
        .print-menu-item:hover { background: #F7F5F0; }
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
                  onChange={(e) => { setQuickSearch(e.target.value); setQuickSearchOpen(true); }}
                  onFocus={() => setQuickSearchOpen(true)}
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
                    ) : quickSearchResults.map((r) => (
                      <button
                        key={r.type + r.name}
                        onClick={() => { setQuickSearchTarget(r); setQuickSearchOpen(false); setQuickSearch(""); }}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 14px", border: "none", background: "transparent", cursor: "pointer",
                          borderBottom: "1px solid #F0EDE6", textAlign: "left" as const,
                        }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#F7F5F0"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
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
          <UtentesPage key={`utentes-${syncDone}`} onBack={() => navigateHome()} />
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
        <div style={styles.legendHint}>Clique numa célula para alternar o turno</div>
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

      {/* Recibo Verde */}
      <h2 style={styles.sectionTitle}>Colaboradores — Recibo Verde</h2>
      <div className="scroll-x" style={styles.gridWrap}>
        <div style={{ minWidth: gridMinWidth }}>
          <div style={styles.row}>
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

      {/* Equipa principal */}
      <h2 style={styles.sectionTitle}>Equipa</h2>
      <div className="scroll-x" style={styles.gridWrap}>
        <div style={{ minWidth: gridMinWidth }}>
          <div style={styles.row}>
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
                  outline: isToday ? "2px solid #2A241C" : undefined,
                  outlineOffset: isToday ? "-2px" : undefined,
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

      {/* Confirm delete modal */}
      {confirmDelete && (
        <div style={styles.overlay} onClick={() => setConfirmDelete(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
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
    gap: 12,
    maxWidth: 1300,
    margin: "0 auto 20px",
  },
  summaryCard: {
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 14,
    padding: "16px 18px",
  },
  summaryCardWarn: {
    background: "#FFF5F4",
    border: "1px solid #F2C4BC",
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#A39B8E",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: 6,
  },
  summaryValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 26,
    fontWeight: 700,
    color: "#2A241C",
    lineHeight: 1,
  },
  summarySub: {
    fontSize: 12,
    color: "#A39B8E",
    marginTop: 4,
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
    fontSize: 20,
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
    width: 190,
    minWidth: 190,
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRight: "1px solid #EFEAE2",
    fontSize: 14,
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
    width: 44,
    minWidth: 44,
    padding: "8px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    borderRight: "1px solid #EFEAE2",
  },
  dayNum: {
    fontWeight: 600,
    fontSize: 13,
    color: "#2A241C",
  },
  dayLetter: {
    fontSize: 10,
    color: "#A39B8E",
    marginTop: 2,
  },
  dayCell: {
    width: 44,
    minWidth: 44,
    height: 44,
    border: "none",
    borderRight: "1px solid #EFEAE2",
    fontSize: 13,
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
    flex: "0 0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "transparent",
    fontSize: 11,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    lineHeight: 1,
  },
  exInput: {
    flex: "0 0 22px",
    width: "100%",
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(255,255,255,0.18)",
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    outline: "none",
    padding: 0,
    colorScheme: "light",
  },
  statCell: {
    width: 52,
    minWidth: 52,
    padding: "10px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #EFEAE2",
  },
  statValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 14,
  },
  statValueMuted: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    color: "#C2BAAC",
  },
  totalValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#B08A4E",
  },
  absenceBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 22,
    height: 22,
    borderRadius: 6,
    background: "#C2554A",
    color: "#FFFFFF",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 13,
  },
  coverageCell: {
    width: 44,
    minWidth: 44,
    height: 38,
    borderRight: "1px solid #EFEAE2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
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
    zIndex: 10,
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
