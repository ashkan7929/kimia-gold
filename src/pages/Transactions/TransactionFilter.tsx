import {useCallback, useEffect, useId, useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, RadioGroup, FormControlLabel, Radio, FormControl
} from "@mui/material";

type Filter = "all" | "success" | "failed";

type Props = {
  open: boolean;
  value: Filter;            
  onApply: (next: Filter) => void;
  onClose: () => void;     
};

const FILTER_OPTIONS: Array<{ value: Filter; label: string }> = [
  { value: "all",     label: "همه" },
  { value: "success", label: "تراکنش‌های موفق" },
  { value: "failed",  label: "تراکنش‌های ناموفق" },
];

export default function TransactionFilter({ open, value, onApply, onClose }: Props) {
  const titleId = useId();
  const [pending, setPending] = useState<Filter>(value);

  useEffect(() => {
	if (open) setPending(value);
  }, [open, value]);

  const handleChange = useCallback(
	(_: React.ChangeEvent<HTMLInputElement>, next: string) => {
	  if (["all", "success", "failed"].includes(next)) {
		setPending(next as Filter);
	  }
	},
	[]
  );

  const handleApply = useCallback(() => {
	onApply(pending);
  }, [onApply, pending]);

  const handleClose = useCallback(
	(_: unknown, reason?: "backdropClick" | "escapeKeyDown") => {
	  if (reason === "backdropClick") return;
	  onClose();
	},
	[onClose]
  );

  return (
	<Dialog
	  open={open}
	  onClose={handleClose}
	  fullWidth
	  maxWidth="xs"
	  keepMounted
	  aria-labelledby={titleId}
	>
	  <DialogTitle id={titleId} className="!font-peyda">فیلتر تراکنش‌ها</DialogTitle>

	  <DialogContent>
		<FormControl component="fieldset" className="mt-2 !font-peyda" fullWidth>
		  <RadioGroup value={pending} onChange={handleChange}>
			{FILTER_OPTIONS.map(opt => (
			  <FormControlLabel
				key={opt.value}
				value={opt.value}
				control={<Radio />}
				label={opt.label}
			  />
			))}
		  </RadioGroup>
		</FormControl>
	  </DialogContent>

	  <DialogActions className="px-4 pb-4 !font-peyda" dir="rtl">
		<Button onClick={onClose}>انصراف</Button>
		<Button variant="contained" onClick={handleApply}>
		  اعمال فیلتر
		</Button>
	  </DialogActions>
	</Dialog>
  );
}
