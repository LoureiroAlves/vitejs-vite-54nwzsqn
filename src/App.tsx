
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
const IconGlobe = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
  </svg>
);
const IconMail = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const IconLink = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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

// ---------- Logótipo da empresa ----------
const COMPANY_LOGO = "data:image/jpeg;base64,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";

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
        <div style={{ display: "flex", gap: 8 }}>
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

      {/* Summary cards */}
      <div style={stockStyles.summaryGrid}>
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
            <div style={stockStyles.productGrid}>
              {filteredProducts.map((prod) => {
                const isLow = prod.quantity > 0 && prod.quantity <= prod.minQuantity;
                const isEmpty = prod.quantity <= 0;
                const catColor = STOCK_CATEGORY_COLORS[prod.category] || "#A39B8E";
                return (
                  <div key={prod.id} style={{ ...stockStyles.productCard, ...(isEmpty ? stockStyles.productCardEmpty : isLow ? stockStyles.productCardLow : {}) }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ ...stockStyles.categoryBadge, background: catColor + "22", color: catColor }}>{prod.category}</span>
                      <button style={stockStyles.deleteBtn2} onClick={() => removeProduct(prod.id)} title="Remover produto">
                        <IconTrash2 size={13} />
                      </button>
                    </div>
                    <div style={stockStyles.productName}>{prod.name}</div>
                    <div style={stockStyles.productQty}>
                      <span style={{ fontSize: 28, fontWeight: 700, color: isEmpty ? "#C2554A" : isLow ? "#E8A020" : "#2A241C", fontFamily: "'Space Grotesk', sans-serif" }}>
                        {prod.quantity}
                      </span>
                      <span style={{ fontSize: 13, color: "#A39B8E", marginLeft: 4 }}>{prod.unit}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#A39B8E", marginBottom: 12 }}>mín. {prod.minQuantity} {prod.unit}</div>
                    {(isLow || isEmpty) && (
                      <div style={{ ...stockStyles.stockBadge, background: isEmpty ? "#C2554A" : "#E8B14A", color: "#fff" }}>
                        {isEmpty ? "Esgotado" : "Stock baixo"}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                      <button style={{ ...stockStyles.moveBtn, flex: 1 }} onClick={() => { setShowMoveModal(prod); setMoveType("entrada"); setMoveQty(""); }}>
                        <IconPlus2 size={13} /> Entrada
                      </button>
                      <button style={{ ...stockStyles.moveBtn, ...stockStyles.moveBtnOut, flex: 1 }} onClick={() => { setShowMoveModal(prod); setMoveType("saida"); setMoveQty(""); }}>
                        <IconMinus size={13} /> Saída
                      </button>
                    </div>
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
  page: { fontFamily: "'Inter', sans-serif", background: "#FBF9F5", minHeight: "100vh", padding: "32px 24px 60px", color: "#2A241C" },
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
  files?: { name: string; type: string; data: string; uploadedAt: string }[];
}

function UtentesPage({ onBack }: { onBack: () => void }) {
  const [utentes, setUtentes] = useState<Utente[]>(() => loadUtentesData()?.utentes ?? []);
  const [openUtente, setOpenUtente] = useState<Utente | null>(null);
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
      u.familyContact || "", u.familyPhone || "", u.notes || "",
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
        <td>${u.notes || "—"}</td><td style="text-align:center">${u.files?.length ?? 0}</td>
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

  const filteredUtentes = utentes.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    (u.room && u.room.toLowerCase().includes(search.toLowerCase()))
  );

  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    return words.length >= 2 ? (words[0][0] + words[words.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
  };

  const UTENTE_FIELDS = [
    { key: "birthDate", label: "Data de nascimento", placeholder: "Ex: 01/01/1940", type: "text" },
    { key: "room", label: "Quarto", placeholder: "Ex: 12A" },
    { key: "entryDate", label: "Data de entrada", placeholder: "Ex: 15/03/2022" },
    { key: "familyContact", label: "Contacto familiar (nome)", placeholder: "Ex: João Silva (filho)" },
    { key: "familyPhone", label: "Contacto familiar (telefone)", placeholder: "Ex: 912 345 678" },
    { key: "notes", label: "Observações", placeholder: "Notas, necessidades especiais...", multiline: true },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#FBF9F5", minHeight: "100vh", padding: "32px 24px 60px", color: "#2A241C" }}>
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
      <div style={{ display: "flex", gap: 10, maxWidth: 1300, margin: "0 auto 20px", alignItems: "center" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome ou quarto..."
          style={{ flex: 1, border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const }}
        />
        {showAdd ? (
          <div style={{ display: "flex", gap: 8 }}>
            <input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") addUtente(); if (e.key === "Escape") { setShowAdd(false); setNewName(""); } }}
              placeholder="Nome do utente"
              style={{ border: "1px solid #E4DED3", borderRadius: 10, padding: "10px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FFFFFF", color: "#2A241C", colorScheme: "light" as const, width: 220 }}
            />
            <button onMouseDown={(e) => e.preventDefault()} onClick={addUtente} style={{ background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Adicionar</button>
            <button onMouseDown={(e) => e.preventDefault()} onClick={() => { setShowAdd(false); setNewName(""); }} style={{ background: "transparent", border: "1px solid #E4DED3", borderRadius: 8, padding: "10px 14px", fontSize: 13, cursor: "pointer", color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>Cancelar</button>
          </div>
        ) : (
          <button onClick={() => setShowAdd(true)} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const }}>
            <IconPlus2 size={15} /> Adicionar utente
          </button>
        )}
      </div>

      {/* Grelha de utentes */}
      {filteredUtentes.length === 0 ? (
        <div style={{ textAlign: "center" as const, color: "#A39B8E", fontSize: 14, padding: "60px 20px", background: "#FFFFFF", borderRadius: 14, border: "1px solid #E4DED3", maxWidth: 1300, margin: "0 auto" }}>
          {search ? `Nenhum utente encontrado para "${search}"` : "Nenhum utente registado ainda.\nClique em \"Adicionar utente\" para começar."}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, maxWidth: 1300, margin: "0 auto" }}>
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
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0E8D5", color: "#B08A4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                {getInitials(utente.name)}
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
      {openUtente && (
        <>
          <div style={{ position: "fixed" as const, inset: 0, background: "rgba(42,36,28,0.3)", zIndex: 50 }} onClick={() => setOpenUtente(null)} />
          <div style={{ position: "fixed" as const, top: 0, right: 0, bottom: 0, width: 400, maxWidth: "100vw", background: "#FFFFFF", boxShadow: "-4px 0 24px rgba(42,36,28,0.12)", zIndex: 51, display: "flex", flexDirection: "column" as const, overflow: "hidden" as const }}>
            {/* Header do painel */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #EFEAE2", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#F0E8D5", color: "#B08A4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
                {getInitials(openUtente.name)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>{openUtente.name}</div>
                <div style={{ fontSize: 12, color: "#A39B8E", marginTop: 2 }}>Ficha do utente</div>
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
                  updateUtente(openUtente.id, { [key]: formatted });
                };

                return (
                  <div key={key} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6B6358", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{label}</label>
                    {multiline ? (
                      <textarea rows={3} value={value} placeholder={placeholder}
                        onChange={(e) => updateUtente(openUtente.id, { [key]: e.target.value })}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }} />
                    ) : isDate ? (
                      <input
                        type="text"
                        value={value}
                        placeholder="DD/MM/AAAA"
                        inputMode="numeric"
                        maxLength={10}
                        onChange={handleDateInput}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const, letterSpacing: "0.05em" }}
                      />
                    ) : (
                      <input type="text" value={value} placeholder={placeholder}
                        onChange={(e) => updateUtente(openUtente.id, { [key]: e.target.value })}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const }} />
                    )}
                  </div>
                );
              })}

              {/* Documentos */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #EFEAE2" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B6358", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Documentos</label>
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
                            updateUtente(openUtente.id, { files: [...(openUtente.files || []), newFile] });
                          };
                          reader.readAsDataURL(file);
                        });
                      };
                      document.body.appendChild(input); input.click(); document.body.removeChild(input);
                    }}
                  >
                    <IconUpload size={13} /> Adicionar ficheiro
                  </button>
                </div>
                {(openUtente.files || []).length === 0 ? (
                  <div style={{ background: "#F7F5F0", borderRadius: 8, padding: "12px", fontSize: 13, color: "#A39B8E", textAlign: "center" as const }}>
                    Nenhum documento ainda.<br /><span style={{ fontSize: 11 }}>PDF, imagens, Word (máx. 5MB)</span>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                    {(openUtente.files || []).map((file, idx) => (
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
                          onClick={() => { if (!window.confirm(`Remover "${file.name}"?`)) return; updateUtente(openUtente.id, { files: (openUtente.files || []).filter((_, i) => i !== idx) }); }}>
                          <IconX size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 24px", borderTop: "1px solid #EFEAE2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "#A39B8E" }}>✓ Guardado automaticamente</span>
              <button style={{ background: "#2A241C", color: "#FBF9F5", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }} onClick={() => setOpenUtente(null)}>Fechar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================

export default function App() {
  const today = new Date();
  const [activePage, setActivePage] = useState<"home" | "schedule" | "stock" | "utentes">("home");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "synced" | "error">("idle");

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

  // Carregar do Supabase ao iniciar (sincronização em background)
  useEffect(() => {
    setSyncStatus("syncing");
    Promise.all([
      loadFromSupabase("escala_data"),
      loadFromSupabase("stock_data"),
    ]).then(([escala, _stock]) => {
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
      setSyncStatus(escala ? "synced" : "idle");
    }).catch(() => setSyncStatus("error"));
  }, []);

  // Guardar tudo automaticamente
  useEffect(() => {
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
  }, [employees, rvEmployees, schedule, extraHours, employeeEmails, scheduleLink, lastPublished]);

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
  const handleExportEmployeePage = () => {
    const rvTable = buildTableHTML(rvEmployees, {
      showStats: false,
      showCoverage: false,
      sectionTitle: "Colaboradores — Recibo Verde",
    });
    const mainTable = buildTableHTML(employees, {
      showStats: false,
      showCoverage: true,
      sectionTitle: "Equipa",
    });

    const now = new Date();
    const updatedStr = `${now.toLocaleDateString("pt-PT")} às ${now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}`;

    const html = `
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Horário — ${MONTH_NAMES[month]} ${year}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
  * { box-sizing: border-box; }
  body { font-family: 'Inter', Arial, sans-serif; background: #FBF9F5; color: #2A241C; margin: 0; padding: 20px 16px 40px; }
  h1 { font-family: 'Space Grotesk', sans-serif; font-size: 22px; margin: 0 0 4px; text-align: center; }
  h2.section-title { font-family: 'Space Grotesk', sans-serif; font-size: 14px; margin: 24px 0 8px; color: #6B6358; text-align: center; }
  .updated { text-align: center; font-size: 12px; color: #A39B8E; margin: 0 0 16px; }
  .scroll { overflow-x: auto; border: 1px solid #E4DED3; border-radius: 12px; background: #FFFFFF; max-width: 100%; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border-bottom: 1px solid #EFEAE2; border-right: 1px solid #EFEAE2; text-align: center; font-size: 13px; padding: 8px 4px; min-width: 38px; white-space: nowrap; }
  th.name, td.name { text-align: left; padding-left: 12px; font-weight: 600; min-width: 130px; position: sticky; left: 0; background: #FFFFFF; z-index: 2; }
  thead th.name { background: #FBF9F5; z-index: 3; }
  thead th { background: #FBF9F5; font-size: 11px; color: #A39B8E; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
  th.weekend, td.weekend { background: #F4EFE6; }
  thead th.weekend { background: #F0E9DC; }
  .dnum { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 13px; color: #2A241C; }
  .dletter { font-size: 9px; color: #A39B8E; margin-top: 2px; }
  td.coverage { background: #FBF9F5; font-weight: 700; font-size: 11px; font-family: 'Space Grotesk', sans-serif; }
  tr.coverage-row td.name { color: #6B6358; background: #FBF9F5; }
  .sep { color: #D9D4CC; margin: 0 1px; }
  .legend { margin-top: 16px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; font-size: 12px; color: #6B6358; }
  .legend-item { display: flex; align-items: center; gap: 6px; }
  .dot { width: 12px; height: 12px; border-radius: 3px; display: inline-block; border: 1px solid rgba(0,0,0,0.06); }
</style>
</head>
<body>
  <h1>Horário — ${MONTH_NAMES[month]} ${year}</h1>
  <p class="updated">Atualizado em ${updatedStr}</p>
  <div class="scroll">${rvTable}</div>
  <div class="scroll" style="margin-top:16px">${mainTable}</div>
  <div class="legend">${legendHTML()}</div>
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `horario-${monthKey}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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

  const handleEditScheduleLink = () => {
    const entered = window.prompt(
      "Link do horário online (opcional, incluído no email aos colaboradores):",
      scheduleLink
    );
    if (entered === null) return;
    setScheduleLink(entered.trim());
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
    handleExportEmployeePage();

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

  // ---------- Aniversários de utentes ----------
  const birthdayAlerts = useMemo(() => {
    const alerts: { name: string; age: number; isToday: boolean; isTomorrow: boolean }[] = [];
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
        alerts.push({ name: u.name, age: isToday ? age : age, isToday, isTomorrow });
      }
    });
    return alerts;
  }, [today]);
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

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
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
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
      `}</style>

      {/* Página inicial */}
      {isHomePage && (
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 0", position: "relative" as const }}>
          {/* Fundo cinzento na página toda */}
          <style>{`
            body { background: #B0A99F !important; }
          `}</style>

          {/* Logo marca de água ESQUERDA — canto superior esquerdo */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" as const, top: -60, left: -60, width: 300, height: 300, opacity: 0.12, pointerEvents: "none" as const, zIndex: 0 }}>
            <circle cx="50" cy="50" r="48" fill="#2D6A2D"/>
            <rect x="46" y="62" width="8" height="22" rx="3" fill="white"/>
            <path d="M46 80 Q36 82 30 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M54 80 Q64 82 70 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="40" rx="16" ry="20" fill="white"/>
            <ellipse cx="34" cy="47" rx="13" ry="16" fill="white" transform="rotate(-15 34 47)"/>
            <ellipse cx="66" cy="47" rx="13" ry="16" fill="white" transform="rotate(15 66 47)"/>
            <ellipse cx="50" cy="24" rx="10" ry="14" fill="white"/>
            <ellipse cx="50" cy="39" rx="8" ry="10" fill="#2D6A2D" opacity="0.3"/>
          </svg>

          {/* Logo marca de água DIREITA — canto inferior direito */}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" as const, bottom: -60, right: -60, width: 300, height: 300, opacity: 0.12, pointerEvents: "none" as const, zIndex: 0 }}>
            <circle cx="50" cy="50" r="48" fill="#2D6A2D"/>
            <rect x="46" y="62" width="8" height="22" rx="3" fill="white"/>
            <path d="M46 80 Q36 82 30 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M54 80 Q64 82 70 88" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="40" rx="16" ry="20" fill="white"/>
            <ellipse cx="34" cy="47" rx="13" ry="16" fill="white" transform="rotate(-15 34 47)"/>
            <ellipse cx="66" cy="47" rx="13" ry="16" fill="white" transform="rotate(15 66 47)"/>
            <ellipse cx="50" cy="24" rx="10" ry="14" fill="white"/>
            <ellipse cx="50" cy="39" rx="8" ry="10" fill="#2D6A2D" opacity="0.3"/>
          </svg>
          {/* Título */}
          <div style={{ textAlign: "center" as const, marginBottom: 52 }}>
            <div style={{ width: 80, height: 80, borderRadius: 24, background: "#2A241C", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5B944" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21V7l9-4 9 4v14" />
                <path d="M9 21V13h6v8" />
                <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M15 13h.01" />
              </svg>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: "#2A241C" }}>
              Associação Oliveirense de Socorros Mútuos
            </h1>
            <p style={{ fontSize: 14, color: "#6B6358", margin: 0 }}>Complexo Intergeracional Quinta dos Avós</p>
          </div>

          {/* Conteúdo por cima da marca de água */}
          <div style={{ position: "relative" as const, zIndex: 1 }}>

          {/* Aniversários */}
          {birthdayAlerts.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              {birthdayAlerts.map((alert, idx) => (
                <div key={idx} style={{
                  background: alert.isToday
                    ? "linear-gradient(135deg, #FFF8E1 0%, #FFF3E0 50%, #FCE4EC 100%)"
                    : "linear-gradient(135deg, #F3F8FF 0%, #EDE7F6 100%)",
                  border: `2px solid ${alert.isToday ? "#FFD54F" : "#B39DDB"}`,
                  borderRadius: 20,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 12,
                  boxShadow: alert.isToday ? "0 4px 20px rgba(255,213,79,0.3)" : "0 4px 20px rgba(179,157,219,0.2)",
                }}>
                  {/* Ícone animado */}
                  <div style={{
                    fontSize: 52,
                    lineHeight: 1,
                    flexShrink: 0,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    animation: alert.isToday ? "bounce 1s infinite" : undefined,
                  }}>
                    {alert.isToday ? "🎂" : "🎁"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#2A241C",
                      marginBottom: 4,
                    }}>
                      {alert.name}
                    </div>
                    <div style={{ fontSize: 14, color: "#6B6358", fontWeight: 500 }}>
                      {alert.isToday
                        ? `🎉 Hoje faz ${alert.age} anos! Parabéns!`
                        : `🔔 Amanhã faz ${alert.age} anos`}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: alert.isToday ? "#F9A825" : "#7E57C2",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    {alert.age}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3 botões grandes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {/* Colaboradores */}
            <button
              onClick={() => setActivePage("schedule")}
              style={{ background: "#FFFFFF", border: "2px solid #E4DED3", borderRadius: 28, padding: "44px 20px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 20, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 2px 12px rgba(42,36,28,0.06)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E8B14A"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(232,177,74,0.22)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E4DED3"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(42,36,28,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 22, background: "#F0E8D5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconUsers size={36} color="#B08A4E" />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                Colaboradores
              </div>
            </button>

            {/* Utentes */}
            <button
              onClick={() => setActivePage("utentes")}
              style={{ background: "#FFFFFF", border: "2px solid #E4DED3", borderRadius: 28, padding: "44px 20px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 20, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 2px 12px rgba(42,36,28,0.06)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#5B8DBE"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(91,141,190,0.22)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E4DED3"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(42,36,28,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 22, background: "#E8EEF5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconUserCircle size={36} color="#3A5A70" />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                Utentes
              </div>
            </button>

            {/* Stock */}
            <button
              onClick={() => setActivePage("stock")}
              style={{ background: "#FFFFFF", border: "2px solid #E4DED3", borderRadius: 28, padding: "44px 20px", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 20, transition: "all 0.15s", fontFamily: "'Inter', sans-serif", boxShadow: "0 2px 12px rgba(42,36,28,0.06)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#6FA86F"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(111,168,111,0.22)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E4DED3"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(42,36,28,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div style={{ width: 72, height: 72, borderRadius: 22, background: "#E8F0E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconBox size={36} color="#3B6D11" />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: "#2A241C", letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                Stock
              </div>
            </button>
          </div>
          </div>
        </div>
      )}

      {/* Página de stock */}
      {isStockPage && (
        <div style={{ margin: "-32px -24px", minHeight: "100vh" }}>
          <StockPage onBack={() => setActivePage("home")} />
        </div>
      )}

      {/* Página de utentes */}
      {isUtentesPage && (
        <div style={{ margin: "-32px -24px", minHeight: "100vh" }}>
          <UtentesPage onBack={() => setActivePage("home")} />
        </div>
      )}

      {isSchedulePage && (<>

      <header style={styles.header}>
        {/* Voltar + ícone de colaboradores */}
        <div style={styles.logoWrap}>
          <button
            onClick={() => setActivePage("home")}
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
        <div style={styles.headerRight} className="no-print">
          <div style={styles.monthNav}>
            <button className="nav-btn" style={styles.navBtnCompact} onClick={goPrevMonth} aria-label="Mês anterior">
              <IconChevronLeft size={16} />
            </button>
            <div style={styles.monthLabel}>{MONTH_NAMES[month]} {year}</div>
            <button className="nav-btn" style={styles.navBtnCompact} onClick={goNextMonth} aria-label="Mês seguinte">
              <IconChevronRight size={16} />
            </button>
          </div>

          <div style={styles.toolbar}>
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
            <button className="tool-btn" style={{ ...styles.toolBtn, color: "#6B6358" }} onClick={handleExportEmployeePage}
              onMouseEnter={(e) => showTip(e, "Gerar página HTML para colaboradores")} onMouseLeave={hideTip} aria-label="Partilhar">
              <IconGlobe size={16} />
            </button>
            <button className="tool-btn" style={{ ...styles.toolBtn, color: scheduleLink ? "#B08A4E" : "#6B6358" }} onClick={handleEditScheduleLink}
              onMouseEnter={(e) => showTip(e, scheduleLink ? `Link definido: ${scheduleLink}` : "Definir link online (opcional)")} onMouseLeave={hideTip} aria-label="Link">
              <IconLink size={16} />
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
                        placeholder={placeholder}
                        rows={3}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", resize: "vertical" as const, boxSizing: "border-box" as const }}
                      />
                    ) : (
                      <input
                        type={key === "email" ? "email" : "text"}
                        value={value}
                        onChange={(e) => setEmployeeProfiles((prev) => ({ ...prev, [openProfile]: { ...(prev[openProfile] || {}), [key]: e.target.value } }))}
                        placeholder={placeholder}
                        style={{ width: "100%", border: "1px solid #E4DED3", borderRadius: 8, padding: "8px 10px", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", background: "#FAFAF8", color: "#2A241C", boxSizing: "border-box" as const, colorScheme: "light" as const }}
                      />
                    )}
                  </div>
                );
              })}

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

      </>)}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "#FBF9F5",
    minHeight: "100vh",
    padding: "32px 24px 60px",
    color: "#2A241C",
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
