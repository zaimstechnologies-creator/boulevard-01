'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { INVENTORY_UNITS } from '@/data/inventory';
import { PROJECTS } from '@/data/projects';
import { InventoryUnit, City, UnitType, InventoryStatus } from '@/types';
import { InventoryItemRow } from '@/components/molecules/InventoryItemRow';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';

export const LiveInventoryLedger: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<UnitType | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<InventoryStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'area_asc' | 'area_desc'>('price_asc');

  // Filter logic
  const filteredUnits = useMemo(() => {
    return INVENTORY_UNITS.filter((unit) => {
      if (selectedCity !== 'all' && unit.city !== selectedCity) return false;
      if (selectedProject !== 'all' && unit.project_id !== selectedProject) return false;
      if (selectedType !== 'all' && unit.unit_type !== selectedType) return false;
      if (selectedStatus !== 'all' && unit.availability_status !== selectedStatus) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesCode = unit.unit_code.toLowerCase().includes(query);
        const matchesFloor = unit.floor_level.toLowerCase().includes(query);
        const matchesProject = unit.project_title.toLowerCase().includes(query);
        if (!matchesCode && !matchesFloor && !matchesProject) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.current_price - b.current_price;
      if (sortBy === 'price_desc') return b.current_price - a.current_price;
      if (sortBy === 'area_asc') return a.covered_area - b.covered_area;
      if (sortBy === 'area_desc') return b.covered_area - a.covered_area;
      return 0;
    });
  }, [selectedCity, selectedProject, selectedType, selectedStatus, searchQuery, sortBy]);

  const stats = useMemo(() => {
    const available = INVENTORY_UNITS.filter((u) => u.availability_status === 'available').length;
    const onHold = INVENTORY_UNITS.filter((u) => u.availability_status === 'on_hold').length;
    const reserved = INVENTORY_UNITS.filter((u) => u.availability_status === 'reserved' || u.availability_status === 'sold').length;
    return { available, onHold, reserved, total: INVENTORY_UNITS.length };
  }, []);

  const resetFilters = () => {
    setSelectedCity('all');
    setSelectedProject('all');
    setSelectedType('all');
    setSelectedStatus('all');
    setSearchQuery('');
    setSortBy('price_asc');
  };

  return (
    <div className="bg-white dark:bg-[#152238] rounded-3xl border border-[#C4A46A]/40 dark:border-[#C4A46A]/30 shadow-xs overflow-hidden transition-colors duration-300">
      {/* Top Banner / Controls Header in Midnight Navy */}
      <div className="bg-[#101B2E] text-[#F5F2EB] p-6 sm:p-8 border-b border-[#C4A46A]/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C4A46A] font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Real-Time Database Sync</span>
            </div>
            <h2 className="text-xl lg:text-3xl font-black font-serif text-white">
              Multi-City Live Unit Availability Ledger
            </h2>
            <p className="text-xs text-gray-300 mt-1 max-w-2xl">
              Transparent unit-level inventory across Bahria Town Lahore and Islamabad. Lock reservation holds directly through the Boulevard 01 WhatsApp Sales Desk (+92 321 000 4000).
            </p>
          </div>

          {/* Quick Counter Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {stats.available} Available
            </span>
            <span className="bg-amber-950/80 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {stats.onHold} On Hold
            </span>
            <span className="bg-rose-950/80 text-rose-300 border border-rose-500/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              {stats.reserved} Reserved
            </span>
          </div>
        </div>

        {/* Municipality Tabs (Lahore vs Islamabad) */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
          <button
            onClick={() => setSelectedCity('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCity === 'all'
                ? 'bg-[#C4A46A] text-[#101B2E] shadow-md font-extrabold'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            All Municipalities ({INVENTORY_UNITS.length})
          </button>
          <button
            onClick={() => setSelectedCity('lahore')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCity === 'lahore'
                ? 'bg-[#C4A46A] text-[#101B2E] shadow-md font-extrabold'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Bahria Town Lahore ({INVENTORY_UNITS.filter((u) => u.city === 'lahore').length})</span>
          </button>
          <button
            onClick={() => setSelectedCity('islamabad')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCity === 'islamabad'
                ? 'bg-[#C4A46A] text-[#101B2E] shadow-md font-extrabold'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Bahria Town Islamabad Phase 8 ({INVENTORY_UNITS.filter((u) => u.city === 'islamabad').length})</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 lg:p-6 bg-[#F5F2EB]/50 dark:bg-[#0E1726] border-b border-[#C4A46A]/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search Unit Code (e.g. G15-04B)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/30 text-gray-800 dark:text-[#F5F2EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
            />
          </div>

          {/* Project Tower Select */}
          <div>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/30 text-gray-800 dark:text-[#F5F2EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
            >
              <option value="all">All Towers & Developments</option>
              {PROJECTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Typology Select */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as UnitType | 'all')}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/30 text-gray-800 dark:text-[#F5F2EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
            >
              <option value="all">All Typologies</option>
              <option value="studio">Studio Lofts</option>
              <option value="1_bed">1-Bedroom Apartments</option>
              <option value="2_bed">2-Bedroom Residences</option>
              <option value="3_bed">3-Bedroom Penthouses</option>
              <option value="commercial">Commercial Retail Outlets</option>
              <option value="office">Grade-A Corporate Offices</option>
              <option value="hotel_suite">Serviced Hotel Suites</option>
            </select>
          </div>

          {/* Availability Status Select */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as InventoryStatus | 'all')}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/30 text-gray-800 dark:text-[#F5F2EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
            >
              <option value="all">All Availability States</option>
              <option value="available">Available (Immediate Hold)</option>
              <option value="on_hold">On Hold (Active Negotiation)</option>
              <option value="reserved">Reserved / Allocated</option>
            </select>
          </div>

          {/* Sorting Order */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 text-xs bg-white dark:bg-[#101B2E] border border-gray-300 dark:border-[#C4A46A]/30 text-gray-800 dark:text-[#F5F2EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C4A46A]"
            >
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="area_asc">Area: Small to Large</option>
              <option value="area_desc">Area: Large to Small</option>
            </select>
            <button
              onClick={resetFilters}
              title="Reset Filters"
              className="p-2 bg-white dark:bg-[#101B2E] hover:bg-gray-100 dark:hover:bg-[#1A2840] border border-gray-300 dark:border-[#C4A46A]/30 rounded-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#0A121F] border-b border-gray-200 dark:border-white/10 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              <th className="py-3.5 px-4">Unit Code & Tower</th>
              <th className="py-3.5 px-4">Floor Level</th>
              <th className="py-3.5 px-4">Typology / Space</th>
              <th className="py-3.5 px-4">Valuation (PKR)</th>
              <th className="py-3.5 px-4 hidden md:table-cell">Installment Plan</th>
              <th className="py-3.5 px-4">Live Status</th>
              <th className="py-3.5 px-4 text-right">Reservation Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-white/10">
            {filteredUnits.length > 0 ? (
              filteredUnits.map((unit) => (
                <InventoryItemRow key={unit.id} unit={unit} />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-gray-500 dark:text-gray-400">
                  <div className="max-w-md mx-auto space-y-3">
                    <p className="text-sm font-semibold text-[#101B2E] dark:text-white">
                      No active units found matching your exact filter criteria.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Try adjusting your municipality or typology filters, or contact our sales desk for unreleased tower inventory.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 bg-[#101B2E] dark:bg-[#C4A46A] text-[#C4A46A] dark:text-[#101B2E] border border-[#C4A46A]/50 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Information Bar */}
      <div className="p-4 bg-gray-50 dark:bg-[#0A121F] border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
        <div>
          Showing <strong>{filteredUnits.length}</strong> of <strong>{INVENTORY_UNITS.length}</strong> cataloged units across Bahria Town Lahore & Islamabad.
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Real-time availability confirmed by Boulevard 01 Sales Directorate.</span>
        </div>
      </div>
    </div>
  );
};
