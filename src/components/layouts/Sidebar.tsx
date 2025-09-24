import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import { cn } from '../../lib/cn';
import { siteConfig } from '../../config/site';
import { useAuthStore } from '../../stores/authStore';
import { hasPermission } from '../../config/permissions';
import { ChevronDown, LogOut } from 'lucide-react';

interface GroupState { [path: string]: boolean }

// simple permission checker for now (placeholder)
// function hasPermission(_perm: string | undefined): boolean { return true; }

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const role = useAuthStore(s => s.session?.role as any);
  const logout = useAuthStore(s => s.logout);
  const filtered = useMemo(() => navigationItems.filter(i => hasPermission(role, i.permission)), [role]);

  const initialGroups: GroupState = useMemo(() => {
    const gs: GroupState = {};
    filtered.forEach(item => {
      if (item.children?.length) {
        const active = item.children.some(c => location.pathname.startsWith(c.path)) || location.pathname === item.path;
        gs[item.path] = active; // auto open if active
      }
    });
    return gs;
  }, [filtered, location.pathname]);
  const [openGroups, setOpenGroups] = useState<GroupState>(initialGroups);

  useEffect(() => { setOpenGroups(initialGroups); }, [initialGroups]);

  const toggleGroup = useCallback((path: string) => {
    setOpenGroups(s => ({ ...s, [path]: !s[path] }));
  }, []);

  // Keyboard navigation within sidebar list
  const navRef = useRef<HTMLUListElement | null>(null);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!navRef.current) return;
    const focusables = Array.from(navRef.current.querySelectorAll<HTMLElement>('[data-nav-item]'));
    const index = focusables.indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = focusables[index + 1] || focusables[0];
      next?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = focusables[index - 1] || focusables[focusables.length - 1];
      prev?.focus();
    } else if (e.key === 'ArrowRight') {
      const current = focusables[index];
      const path = current?.getAttribute('data-group');
      if (path && openGroups[path] === false) {
        e.preventDefault();
        toggleGroup(path);
      }
    } else if (e.key === 'ArrowLeft') {
      const current = focusables[index];
      const path = current?.getAttribute('data-group');
      if (path && openGroups[path]) {
        e.preventDefault();
        toggleGroup(path);
      }
    }
  };

  const isParentActive = (itemPath: string, children?: any[]) => {
    if (location.pathname === itemPath) return true;
    return children?.some(c => location.pathname.startsWith(c.path));
  };

  return (
    <aside
      className="w-64 shrink-0 border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 h-full flex flex-col"
      aria-label="Main navigation"
    >
      <div className="px-4 py-5 border-b">
        <h1 className="text-lg font-semibold tracking-tight text-qatar-maroon">{siteConfig.name}</h1>
        <p className="text-[10px] text-gray-500">v{siteConfig.version}</p>
      </div>
      <nav className="flex-1 overflow-y-auto py-4" role="navigation" onKeyDown={onKeyDown}>
        <ul className="space-y-1 px-3" ref={navRef}>
          {filtered.map(item => {
            const active = isParentActive(item.path, item.children);
            const hasChildren = !!item.children?.length;
            const groupOpen = hasChildren ? openGroups[item.path] : false;
            return (
              <li key={item.path}>
                <div className={cn('flex flex-col rounded-md', active && 'bg-qatar-maroon/5')}>  
                  <div className="flex items-center">
                    <NavLink
                      to={item.path}
                      data-nav-item
                      data-group={hasChildren ? item.path : undefined}
                      className={({ isActive }) => cn(
                        'group flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon',
                        (isActive || active) ? 'text-qatar-maroon' : 'text-gray-600 hover:bg-qatar-maroon/10 hover:text-qatar-maroon'
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="truncate flex-1 text-left">{item.title}</span>
                    </NavLink>
                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={groupOpen ? 'Collapse section' : 'Expand section'}
                        data-nav-item
                        data-group={item.path}
                        onClick={() => toggleGroup(item.path)}
                        className={cn('p-1 mr-1 rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon', groupOpen ? 'text-qatar-maroon' : 'text-gray-500 hover:text-qatar-maroon')}
                      >
                        <ChevronDown className={cn('h-4 w-4 transform transition-transform', groupOpen ? 'rotate-180' : 'rotate-0')} />
                      </button>
                    )}
                  </div>
                  {hasChildren && groupOpen && (
                    <ul className="mt-0.5 mb-1 ml-6 space-y-0.5 border-l border-qatar-maroon/10 pl-3">
                      {item.children!.filter(c => hasPermission(role, c.permission)).map(child => {
                        const childActive = location.pathname.startsWith(child.path);
                        return (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              data-nav-item
                              className={({ isActive }) => cn(
                                'block rounded px-2 py-1 text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon',
                                (isActive || childActive) ? 'bg-qatar-maroon/90 text-white' : 'text-gray-500 hover:text-qatar-maroon hover:bg-qatar-maroon/10'
                              )}
                            >
                              {child.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-3 border-t text-xs text-gray-500 space-y-2">
        <button
          type="button"
          onClick={() => logout()}
          className="w-full flex items-center justify-center gap-2 rounded border border-qatar-maroon/30 px-3 py-2 text-[11px] font-medium text-qatar-maroon hover:bg-qatar-maroon hover:text-white transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" /> Logout
        </button>
        <p className="text-center">Desktop Only • {new Date().getFullYear()}</p>
      </div>
    </aside>
  );
};