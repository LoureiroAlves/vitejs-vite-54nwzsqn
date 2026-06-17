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
}

export default function App() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

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

  // Guardar tudo automaticamente
  useEffect(() => {
    saveStoredData({
      employees,
      rvEmployees,
      schedule,
      extraHours,
      employeeEmails,
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
  const handleNotify = () => {
    let link = scheduleLink;
    if (!link) {
      const entered = window.prompt(
        "Cole aqui o link do horário (o link gerado no Netlify) para incluir no email:",
        ""
      );
      if (entered === null) return;
      link = entered.trim();
      setScheduleLink(link);
    }

    const recipients = allEmployees
      .map((emp) => employeeEmails[emp])
      .filter((email) => email && email.includes("@"));

    if (recipients.length === 0) {
      alert(
        "Nenhum colaborador tem email definido.\n\nClique no ícone de envelope junto ao nome de cada colaborador para adicionar o email."
      );
      return;
    }

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
      body += "Alterações:\n";
      Object.entries(changesByEmployee).forEach(([emp, list]) => {
        body += `- ${emp}: ${list.join("; ")}\n`;
      });
      body += "\n";
    } else {
      body += "Não há alterações desde a última notificação — esta mensagem confirma o horário atual.\n\n";
    }

    body += `Pode consultar o horário completo aqui:\n${link}\n\nObrigado.`;

    const subject = `Horário atualizado — ${MONTH_NAMES[month]} ${year}`;

    const mailto = `mailto:?bcc=${encodeURIComponent(recipients.join(","))}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setLastPublished((prev) => ({
      ...prev,
      [monthKey]: JSON.parse(JSON.stringify(schedule[monthKey] || {})),
    }));
  };

  // ---------- Renderização de células ----------
  const renderDayCell = (emp: string, d: number) => {
    const shift = getShift(emp, d);
    const def = shift ? SHIFT_TYPES[shift] : null;
    const bg = def ? def.color : "#F7F5F0";
    const fg = def && shift && !LIGHT_SHIFTS.includes(shift) ? "#FFFFFF" : "#9A9388";

    if (shift === "EX") {
      return (
        <div key={d} style={{ ...styles.dayCell, ...styles.exCell, background: bg }}>
          <button
            className="cell-btn"
            onClick={() => cycleShift(emp, d)}
            style={{ ...styles.exLabel, color: fg }}
            title="Extra — clique para alterar turno"
          >
            EX
          </button>
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
        </div>
      );
    }

    return (
      <button
        key={d}
        className="cell-btn"
        onClick={() => cycleShift(emp, d)}
        style={{ ...styles.dayCell, background: bg, color: fg }}
        title={def ? def.label : "Sem turno — clique para atribuir"}
      >
        {shift || "—"}
      </button>
    );
  };

  const renderDayHeaderCells = () =>
    days.map((d) => {
      const date = new Date(year, month, d);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      return (
        <div key={d} style={{ ...styles.dayHeaderCell, background: isWeekend ? "#F4EFE6" : "#FBF9F5" }}>
          <div style={styles.dayNum}>{d}</div>
          <div style={styles.dayLetter}>{WEEKDAY_LETTERS[date.getDay()]}</div>
        </div>
      );
    });

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

  const renderEmployeeRow = (emp: string, group: "rv" | "main") => (
    <div key={emp} style={styles.row}>
      <div style={{ ...styles.nameCell, position: "sticky", left: 0, zIndex: 2, background: "#FFFFFF" }}>
        <span style={styles.nameText}>{emp}</span>
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

  const gridMinWidth = 190 + numDays * 44 + 260;

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .cell-btn { transition: transform 0.08s ease, box-shadow 0.08s ease; }
        .cell-btn:hover { transform: scale(1.04); }
        .cell-btn:active { transform: scale(0.97); }
        .scroll-x::-webkit-scrollbar { height: 8px; }
        .scroll-x::-webkit-scrollbar-thumb { background: #D9D4CC; border-radius: 4px; }
        .icon-btn:hover { background: #EFEAE2; }
        .add-btn:hover { background: #1F1B16; }
        .nav-btn:hover { background: #EFEAE2; }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
      `}</style>

      <header style={styles.header}>
        <div>
          <div style={styles.eyebrow}>Painel do administrador</div>
          <h1 style={styles.title}>Escala de turnos</h1>
        </div>
        <div style={styles.monthNav} className="no-print">
          <button className="nav-btn" style={styles.navBtn} onClick={goPrevMonth} aria-label="Mês anterior">
            <IconChevronLeft size={18} />
          </button>
          <div style={styles.monthLabel}>
            {MONTH_NAMES[month]} {year}
          </div>
          <button className="nav-btn" style={styles.navBtn} onClick={goNextMonth} aria-label="Mês seguinte">
            <IconChevronRight size={18} />
          </button>
          <button
            className="nav-btn"
            style={{ ...styles.navBtn, borderLeft: "1px solid #E4DED3", marginLeft: 4, paddingLeft: 12 }}
            onClick={handleNotify}
            aria-label="Notificar colaboradores"
            title="Notificar colaboradores por email"
          >
            <IconMail size={18} />
          </button>
          <button
            className="nav-btn"
            style={styles.navBtn}
            onClick={handleExportEmployeePage}
            aria-label="Gerar página para colaboradores"
            title="Gerar página HTML para partilhar com os colaboradores"
          >
            <IconGlobe size={18} />
          </button>
          <button
            className="nav-btn"
            style={styles.navBtn}
            onClick={handleExportExcel}
            aria-label="Exportar para Excel"
            title="Exportar para Excel (.csv)"
          >
            <IconFileSpreadsheet size={18} />
          </button>
          <button
            className="nav-btn"
            style={styles.navBtn}
            onClick={() => handlePrint(true)}
            aria-label="Imprimir completo"
            title="Imprimir / Guardar PDF — versão completa (com horas e totais)"
          >
            <IconPrinter size={18} />
          </button>
          <button
            className="nav-btn"
            style={styles.navBtn}
            onClick={() => handlePrint(false)}
            aria-label="Imprimir para colaboradores"
            title="Imprimir / Guardar PDF — versão para colaboradores (sem horas e totais)"
          >
            <IconUsers size={18} />
          </button>
        </div>
      </header>

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
            {days.map((d) => (
              <div key={d} style={styles.coverageCell}>
                <span style={{ color: SHIFT_TYPES.M.color }}>{dayCoverage[d]?.M ?? 0}</span>
                <span style={styles.coverageSep}>/</span>
                <span style={{ color: SHIFT_TYPES.T.color }}>{dayCoverage[d]?.T ?? 0}</span>
                <span style={styles.coverageSep}>/</span>
                <span style={{ color: SHIFT_TYPES.N.color }}>{dayCoverage[d]?.N ?? 0}</span>
              </div>
            ))}
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
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: 16,
    maxWidth: 1300,
    margin: "0 auto 20px",
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#B08A4E",
    fontWeight: 600,
    marginBottom: 4,
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 32,
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  monthNav: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#FFFFFF",
    border: "1px solid #E4DED3",
    borderRadius: 12,
    padding: "6px 8px",
    flexWrap: "wrap",
  },
  navBtn: {
    border: "none",
    background: "transparent",
    borderRadius: 8,
    padding: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#2A241C",
  },
  monthLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    minWidth: 130,
    textAlign: "center",
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: "#6B6358",
    maxWidth: 1300,
    margin: "0 auto 8px",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
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
